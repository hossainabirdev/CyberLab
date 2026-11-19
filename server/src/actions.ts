// CyberLab server actions: learner profile, progress, quizzes, CTF flag
// validation (flags live only here, never in the client bundle), activity,
// and the live CISA KEV recent-additions feed with a server-side cache.

import { defineAction, z, type ActionsModule, type Ctx, type SpaceDb } from "@hatch/space-sdk";
import { desc, eq } from "drizzle-orm";
import * as schema from "./schema";

type Db = SpaceDb<typeof schema>;

// Intended CTF solutions. Checked server-side only.
const CTF_FLAGS: Record<string, string> = {
  "ctf-headers": "CLAB{missing_headers_found}",
  "ctf-perms": "CLAB{world_writable_secrets}",
  "ctf-dns": "CLAB{dns_txt_leak}",
  "ctf-logs": "CLAB{brute_force_0417}",
  "ctf-jwt": "CLAB{alg_none_rejected}",
  "ctf-idor": "CLAB{bola_object_1042}",
  "ctf-hash": "CLAB{sha256_match_verified}",
  "ctf-phish": "CLAB{lookalike_domain_spotted}",
  "ctf-xss": "CLAB{csp_blocks_inline_script}",
  "ctf-segments": "CLAB{default_deny_segmented}",
  "ctf-pkce": "CLAB{oauth_pkce_required}",
  "ctf-cvss": "CLAB{kev_beats_cvss}",
  "ctf-kerberos": "CLAB{unconstrained_delegation_found}",
  "ctf-bucket": "CLAB{public_bucket_blocked}",
  "ctf-graphql": "CLAB{introspection_disabled_prod}",
  "ctf-yara": "CLAB{yara_rule_matched}",
  "ctf-bigo": "CLAB{quadratic_gives_up}",
  "ctf-sqlflag": "CLAB{inner_join_found_it}",
  "ctf-grammar": "CLAB{leftmost_derivation}",
};

const progressRow = z.object({
  kind: z.string(),
  contentId: z.string(),
  xp: z.number(),
  score: z.number().nullable(),
  detail: z.string().nullable(),
  completedAt: z.string(),
});

const stateResponse = z.object({
  profile: z.object({
    displayName: z.string(),
    goalRole: z.string(),
    dailyGoalMinutes: z.number(),
    diagnostic: z
      .object({
        score: z.number(),
        total: z.number(),
        perTopic: z.array(z.object({ topic: z.string(), score: z.number(), total: z.number() })),
        takenAt: z.string(),
      })
      .nullable(),
  }),
  progress: z.array(progressRow),
  quizAttempts: z.array(
    z.object({ quizId: z.string(), score: z.number(), total: z.number(), at: z.string() }),
  ),
  activity: z.array(z.object({ label: z.string(), kind: z.string(), at: z.string() })),
  totalXp: z.number(),
});

type StateOut = z.infer<typeof stateResponse>;

async function ensureProfile(db: Db) {
  const rows = await db.select().from(schema.profile);
  if (rows.length === 0) {
    await db.insert(schema.profile).values({ id: 1 });
    return { id: 1, displayName: "Learner", goalRole: "", dailyGoalMinutes: 30, diagnosticJson: null, diagnosticScore: null, diagnosticAt: null, createdAt: new Date() };
  }
  return rows[0]!;
}


export type KevItem = {
  cveID: string;
  vendor: string;
  product: string;
  name: string;
  dateAdded: string;
  dueDate: string;
  ransomware: string;
  cwes: string[];
};
export type KevResult = { catalogVersion: string; fetchedAt: string; live: boolean; items: KevItem[] };

async function loadKev(ctx: Ctx, force: boolean): Promise<KevResult> {
    const db = ctx.db<typeof schema>();
    const cached = await db.select().from(schema.kevCache);
    const cacheRow = cached[0];
    const sixHours = 6 * 60 * 60 * 1000;
    if (!force && cacheRow && Date.now() - cacheRow.fetchedAt.getTime() < sixHours) {
      return {
        catalogVersion: cacheRow.catalogVersion,
        fetchedAt: cacheRow.fetchedAt.toISOString(),
        live: false,
        items: JSON.parse(cacheRow.payload) as KevItem[],
      };
    }
    try {
      const res = await fetch(
        "https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json",
      );
      if (!res.ok) throw new Error(`KEV feed HTTP ${res.status}`);
      const data = (await res.json()) as {
        catalogVersion: string;
        vulnerabilities: {
          cveID: string;
          vendorProject: string;
          product: string;
          vulnerabilityName: string;
          dateAdded: string;
          dueDate: string;
          knownRansomwareCampaignUse: string;
          cwes?: string[];
        }[];
      };
      const items = [...data.vulnerabilities]
        .sort((a, b) => (a.dateAdded < b.dateAdded ? 1 : -1))
        .slice(0, 12)
        .map((v) => ({
          cveID: v.cveID,
          vendor: v.vendorProject,
          product: v.product,
          name: v.vulnerabilityName,
          dateAdded: v.dateAdded,
          dueDate: v.dueDate,
          ransomware: v.knownRansomwareCampaignUse,
          cwes: v.cwes ?? [],
        }));
      const now = new Date();
      if (cacheRow) {
        await db
          .update(schema.kevCache)
          .set({ catalogVersion: data.catalogVersion, payload: JSON.stringify(items), fetchedAt: now })
          .where(eq(schema.kevCache.id, 1));
      } else {
        await db.insert(schema.kevCache).values({
          id: 1,
          catalogVersion: data.catalogVersion,
          payload: JSON.stringify(items),
          fetchedAt: now,
        });
      }
      return { catalogVersion: data.catalogVersion, fetchedAt: now.toISOString(), live: true, items };
    } catch {
      if (cacheRow) {
        return {
          catalogVersion: cacheRow.catalogVersion,
          fetchedAt: cacheRow.fetchedAt.toISOString(),
          live: false,
          items: JSON.parse(cacheRow.payload) as KevItem[],
        };
      }
      return { catalogVersion: "unavailable", fetchedAt: new Date().toISOString(), live: false, items: [] };
    }

}

export const Actions = {
  getState: defineAction({
    description: "Returns the learner profile, all progress, quiz attempts, and recent activity.",
    request: z.object({}),
    response: stateResponse,
    async handler(ctx): Promise<StateOut> {
      const db = ctx.db<typeof schema>();
      const prof = await ensureProfile(db);
      const prog = await db.select().from(schema.progress).orderBy(desc(schema.progress.completedAt));
      const attempts = await db.select().from(schema.quizAttempts).orderBy(desc(schema.quizAttempts.id)).limit(200);
      const acts = await db.select().from(schema.activity).orderBy(desc(schema.activity.id)).limit(60);
      let diagnostic: StateOut["profile"]["diagnostic"] = null;
      if (prof.diagnosticJson && prof.diagnosticAt) {
        try {
          const parsed = JSON.parse(prof.diagnosticJson) as {
            total: number;
            perTopic: { topic: string; score: number; total: number }[];
          };
          diagnostic = {
            score: prof.diagnosticScore ?? 0,
            total: parsed.total,
            perTopic: parsed.perTopic,
            takenAt: prof.diagnosticAt.toISOString(),
          };
        } catch {
          diagnostic = null;
        }
      }
      const totalXp =
        prog.reduce((s, r) => s + r.xp, 0) + attempts.reduce((s, a) => s + a.score * 2, 0);
      return {
        profile: {
          displayName: prof.displayName,
          goalRole: prof.goalRole,
          dailyGoalMinutes: prof.dailyGoalMinutes,
          diagnostic,
        },
        progress: prog.map((r) => ({
          kind: r.kind,
          contentId: r.contentId,
          xp: r.xp,
          score: r.score,
          detail: r.detail,
          completedAt: r.completedAt.toISOString(),
        })),
        quizAttempts: attempts.map((a) => ({
          quizId: a.quizId,
          score: a.score,
          total: a.total,
          at: a.createdAt.toISOString(),
        })),
        activity: acts.map((a) => ({ label: a.label, kind: a.kind, at: a.createdAt.toISOString() })),
        totalXp,
      };
    },
  }),

  saveProfile: defineAction({
    description: "Saves the learner's display name, target role, and daily study goal.",
    request: z.object({
      displayName: z.string().min(1).max(60),
      goalRole: z.string().max(80),
      dailyGoalMinutes: z.number().int().min(5).max(480),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      await ensureProfile(db);
      await db
        .update(schema.profile)
        .set({ displayName: args.displayName, goalRole: args.goalRole, dailyGoalMinutes: args.dailyGoalMinutes })
        .where(eq(schema.profile.id, 1));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  saveDiagnostic: defineAction({
    description: "Stores the Level 0 diagnostic result with per-topic scores.",
    request: z.object({
      score: z.number().int().min(0).max(100),
      total: z.number().int().min(1).max(100),
      perTopic: z.array(z.object({ topic: z.string(), score: z.number(), total: z.number() })).max(20),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      await ensureProfile(db);
      await db
        .update(schema.profile)
        .set({
          diagnosticJson: JSON.stringify({ total: args.total, perTopic: args.perTopic }),
          diagnosticScore: args.score,
          diagnosticAt: new Date(),
        })
        .where(eq(schema.profile.id, 1));
      await db.insert(schema.activity).values({ label: "Completed the Level 0 diagnostic assessment", kind: "assessment" });
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  completeItem: defineAction({
    description: "Marks a lesson, lab, mission, project, or assessment complete (upsert; XP counted once).",
    request: z.object({
      kind: z.enum(["lesson", "lab", "mission", "ctf", "project", "assessment"]),
      contentId: z.string().min(1).max(120),
      xp: z.number().int().min(0).max(1000),
      score: z.number().int().min(0).max(1000).optional(),
      detail: z.string().max(500).optional(),
      label: z.string().max(200).optional(),
    }),
    response: z.object({ ok: z.literal(true), alreadyDone: z.boolean() }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      const existing = await db
        .select()
        .from(schema.progress)
        .where(eq(schema.progress.contentId, args.contentId));
      const already = existing.some((r) => r.kind === args.kind);
      if (!already) {
        await db.insert(schema.progress).values({
          kind: args.kind,
          contentId: args.contentId,
          xp: args.xp,
          score: args.score ?? null,
          detail: args.detail ?? null,
        });
        if (args.label) {
          await db.insert(schema.activity).values({ label: args.label, kind: args.kind });
        }
      }
      ctx.invalidateQueries();
      return { ok: true as const, alreadyDone: already };
    },
  }),

  recordQuiz: defineAction({
    description: "Records one quiz attempt (lesson quiz or skill assessment) with its score.",
    request: z.object({
      quizId: z.string().min(1).max(120),
      score: z.number().int().min(0).max(200),
      total: z.number().int().min(1).max(200),
      label: z.string().max(200).optional(),
    }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      await db.insert(schema.quizAttempts).values({ quizId: args.quizId, score: args.score, total: args.total });
      if (args.label) {
        await db.insert(schema.activity).values({
          label: `${args.label} — scored ${args.score}/${args.total}`,
          kind: "quiz",
        });
      }
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  submitFlag: defineAction({
    description: "Validates a CTF flag server-side and records the solve on success.",
    request: z.object({
      challengeId: z.string().min(1).max(60),
      flag: z.string().min(1).max(120),
      xp: z.number().int().min(0).max(1000),
    }),
    response: z.object({ correct: z.boolean() }),
    async handler(ctx, args) {
      const expected = CTF_FLAGS[args.challengeId];
      const correct = expected !== undefined && args.flag.trim() === expected;
      if (correct) {
        const db = ctx.db<typeof schema>();
        const existing = await db
          .select()
          .from(schema.progress)
          .where(eq(schema.progress.contentId, args.challengeId));
        if (!existing.some((r) => r.kind === "ctf")) {
          await db.insert(schema.progress).values({
            kind: "ctf",
            contentId: args.challengeId,
            xp: args.xp,
            score: args.xp,
          });
          await db.insert(schema.activity).values({ label: `Solved CTF challenge ${args.challengeId}`, kind: "ctf" });
        }
        ctx.invalidateQueries();
      }
      return { correct };
    },
  }),

  getSecurityUpdates: defineAction({
    description: "Returns the 12 most recent CISA KEV additions, live from CISA with a cached fallback.",
    request: z.object({ force: z.boolean().default(false) }),
    response: z.object({
      catalogVersion: z.string(),
      fetchedAt: z.string(),
      live: z.boolean(),
      items: z.array(
        z.object({
          cveID: z.string(),
          vendor: z.string(),
          product: z.string(),
          name: z.string(),
          dateAdded: z.string(),
          dueDate: z.string(),
          ransomware: z.string(),
          cwes: z.array(z.string()),
        }),
      ),
    }),
    async handler(ctx, args) {
      return loadKev(ctx, args.force);
    },
  }),

  getThreatIntel: defineAction({
    description: "Returns recent CISA KEV items enriched with live FIRST EPSS scores where available.",
    request: z.object({ force: z.boolean().default(false) }),
    response: z.object({
      catalogVersion: z.string(),
      fetchedAt: z.string(),
      live: z.boolean(),
      epssLive: z.boolean(),
      items: z.array(
        z.object({
          cveID: z.string(),
          vendor: z.string(),
          product: z.string(),
          name: z.string(),
          dateAdded: z.string(),
          dueDate: z.string(),
          ransomware: z.string(),
          cwes: z.array(z.string()),
          epss: z.number().nullable(),
          epssPercentile: z.number().nullable(),
        }),
      ),
    }),
    async handler(ctx, args) {
      const kev = await loadKev(ctx, args.force);
      let epssMap = new Map<string, { epss: number; percentile: number }>();
      let epssLive = false;
      if (kev.items.length > 0) {
        try {
          const cves = kev.items.map((i) => i.cveID).join(",");
          const res = await fetch(`https://api.first.org/data/v1/epss?cve=${cves}`);
          if (res.ok) {
            const data = (await res.json()) as {
              data?: { cve: string; epss: string; percentile: string }[];
            };
            for (const d of data.data ?? []) {
              epssMap.set(d.cve, { epss: Number(d.epss), percentile: Number(d.percentile) });
            }
            epssLive = epssMap.size > 0;
          }
        } catch {
          epssLive = false;
        }
      }
      return {
        catalogVersion: kev.catalogVersion,
        fetchedAt: kev.fetchedAt,
        live: kev.live,
        epssLive,
        items: kev.items.map((i) => ({
          ...i,
          epss: epssMap.get(i.cveID)?.epss ?? null,
          epssPercentile: epssMap.get(i.cveID)?.percentile ?? null,
        })),
      };
    },
  }),

  listResearchNotes: defineAction({
    description: "Lists all Research Workspace entries, newest first.",
    request: z.object({}),
    response: z.object({
      notes: z.array(
        z.object({
          id: z.number(),
          kind: z.string(),
          title: z.string(),
          body: z.string(),
          link: z.string().nullable(),
          cwe: z.string().nullable(),
          attack: z.string().nullable(),
          status: z.string(),
          createdAt: z.string(),
          updatedAt: z.string(),
        }),
      ),
    }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const rows = await db.select().from(schema.researchNotes).orderBy(desc(schema.researchNotes.id));
      return {
        notes: rows.map((r) => ({
          id: r.id,
          kind: r.kind,
          title: r.title,
          body: r.body,
          link: r.link,
          cwe: r.cwe,
          attack: r.attack,
          status: r.status,
          createdAt: r.createdAt.toISOString(),
          updatedAt: r.updatedAt.toISOString(),
        })),
      };
    },
  }),

  saveResearchNote: defineAction({
    description: "Creates or updates a Research Workspace entry (question, note, snippet, finding, timeline, or report).",
    request: z.object({
      id: z.number().int().positive().optional(),
      kind: z.enum(["question", "note", "snippet", "finding", "timeline", "report"]),
      title: z.string().min(1).max(200),
      body: z.string().max(20000).default(""),
      link: z.string().max(500).optional(),
      cwe: z.string().max(40).optional(),
      attack: z.string().max(60).optional(),
      status: z.string().max(30).default("open"),
    }),
    response: z.object({ id: z.number() }),
    async handler(ctx, args) {
      // Only http/https links are accepted; anything else is dropped, never stored.
      const link =
        args.link && /^https?:\/\//i.test(args.link.trim()) ? args.link.trim() : null;
      const db = ctx.db<typeof schema>();
      const now = new Date();
      if (args.id) {
        await db
          .update(schema.researchNotes)
          .set({
            kind: args.kind,
            title: args.title,
            body: args.body,
            link,
            cwe: args.cwe ?? null,
            attack: args.attack ?? null,
            status: args.status,
            updatedAt: now,
          })
          .where(eq(schema.researchNotes.id, args.id));
        ctx.invalidateQueries();
        return { id: args.id };
      }
      const inserted = await db
        .insert(schema.researchNotes)
        .values({
          kind: args.kind,
          title: args.title,
          body: args.body,
          link,
          cwe: args.cwe ?? null,
          attack: args.attack ?? null,
          status: args.status,
          createdAt: now,
          updatedAt: now,
        })
        .returning({ id: schema.researchNotes.id });
      ctx.invalidateQueries();
      return { id: inserted[0]!.id };
    },
  }),

  deleteResearchNote: defineAction({
    description: "Deletes one Research Workspace entry by id.",
    request: z.object({ id: z.number().int().positive() }),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx, args) {
      const db = ctx.db<typeof schema>();
      await db.delete(schema.researchNotes).where(eq(schema.researchNotes.id, args.id));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),

  exportProgress: defineAction({
    description: "Exports the full learner state (profile, progress, attempts) as a JSON string.",
    request: z.object({}),
    response: z.object({ json: z.string() }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      const prof = await db.select().from(schema.profile);
      const prog = await db.select().from(schema.progress);
      const attempts = await db.select().from(schema.quizAttempts);
      return {
        json: JSON.stringify(
          {
            exportedAt: new Date().toISOString(),
            profile: prof[0] ?? null,
            progress: prog,
            quizAttempts: attempts,
          },
          null,
          2,
        ),
      };
    },
  }),

  importProgress: defineAction({
    description: "Imports a previously exported CyberLab progress JSON, replacing current progress.",
    request: z.object({ json: z.string().min(2).max(2_000_000) }),
    response: z.object({ ok: z.boolean(), message: z.string() }),
    async handler(ctx, args) {
      let data: {
        profile?: { displayName?: string; goalRole?: string; dailyGoalMinutes?: number; diagnosticJson?: string | null; diagnosticScore?: number | null; diagnosticAt?: number | null } | null;
        progress?: { kind: string; contentId: string; xp: number; score: number | null; detail: string | null; completedAt: number }[];
        quizAttempts?: { quizId: string; score: number; total: number; createdAt: number }[];
      };
      try {
        data = JSON.parse(args.json) as typeof data;
      } catch {
        return { ok: false, message: "That file is not valid JSON." };
      }
      if (!Array.isArray(data.progress)) {
        return { ok: false, message: "This does not look like a CyberLab export (no progress list)." };
      }
      const db = ctx.db<typeof schema>();
      await ensureProfile(db);
      await db.delete(schema.progress);
      await db.delete(schema.quizAttempts);
      for (const p of data.progress) {
        await db.insert(schema.progress).values({
          kind: p.kind as "lesson",
          contentId: String(p.contentId),
          xp: Number(p.xp) || 0,
          score: p.score ?? null,
          detail: p.detail ?? null,
          completedAt: new Date(p.completedAt),
        });
      }
      for (const a of data.quizAttempts ?? []) {
        await db.insert(schema.quizAttempts).values({
          quizId: String(a.quizId),
          score: Number(a.score) || 0,
          total: Number(a.total) || 1,
          createdAt: new Date(a.createdAt),
        });
      }
      if (data.profile) {
        await db
          .update(schema.profile)
          .set({
            displayName: data.profile.displayName ?? "Learner",
            goalRole: data.profile.goalRole ?? "",
            dailyGoalMinutes: data.profile.dailyGoalMinutes ?? 30,
            diagnosticJson: data.profile.diagnosticJson ?? null,
            diagnosticScore: data.profile.diagnosticScore ?? null,
            diagnosticAt: data.profile.diagnosticAt ? new Date(data.profile.diagnosticAt) : null,
          })
          .where(eq(schema.profile.id, 1));
      }
      await db.insert(schema.activity).values({ label: "Imported progress from a CyberLab export", kind: "settings" });
      ctx.invalidateQueries();
      return { ok: true, message: `Imported ${data.progress.length} progress records.` };
    },
  }),

  resetProgress: defineAction({
    description: "Deletes all progress, quiz attempts, and activity for a fresh start (profile settings kept).",
    request: z.object({}),
    response: z.object({ ok: z.literal(true) }),
    async handler(ctx) {
      const db = ctx.db<typeof schema>();
      await db.delete(schema.progress);
      await db.delete(schema.quizAttempts);
      await db.delete(schema.activity);
      await db
        .update(schema.profile)
        .set({ diagnosticJson: null, diagnosticScore: null, diagnosticAt: null })
        .where(eq(schema.profile.id, 1));
      ctx.invalidateQueries();
      return { ok: true as const };
    },
  }),
} satisfies ActionsModule;

