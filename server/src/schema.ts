// CyberLab schema: learner profile, progress, quiz attempts, activity, KEV cache.
import { integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const profile = sqliteTable("profile", {
  id: integer("id").primaryKey(),
  displayName: text("display_name").notNull().default("Learner"),
  goalRole: text("goal_role").notNull().default(""),
  dailyGoalMinutes: integer("daily_goal_minutes").notNull().default(30),
  diagnosticJson: text("diagnostic_json"),
  diagnosticScore: integer("diagnostic_score"),
  diagnosticAt: integer("diagnostic_at", { mode: "timestamp_ms" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const progress = sqliteTable(
  "progress",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    kind: text("kind", {
      enum: ["lesson", "lab", "mission", "ctf", "project", "assessment"],
    }).notNull(),
    contentId: text("content_id").notNull(),
    xp: integer("xp").notNull().default(0),
    score: integer("score"),
    detail: text("detail"),
    completedAt: integer("completed_at", { mode: "timestamp_ms" })
      .notNull()
      .$defaultFn(() => new Date()),
  },
  (t) => [uniqueIndex("progress_kind_content").on(t.kind, t.contentId)],
);

export const quizAttempts = sqliteTable("quiz_attempts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  quizId: text("quiz_id").notNull(),
  score: integer("score").notNull(),
  total: integer("total").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const activity = sqliteTable("activity", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  label: text("label").notNull(),
  kind: text("kind").notNull().default("study"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export const kevCache = sqliteTable("kev_cache", {
  id: integer("id").primaryKey(),
  catalogVersion: text("catalog_version").notNull(),
  payload: text("payload").notNull(),
  fetchedAt: integer("fetched_at", { mode: "timestamp_ms" }).notNull(),
});

export const researchNotes = sqliteTable("research_notes", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  kind: text("kind", {
    enum: ["question", "note", "snippet", "finding", "timeline", "report"],
  }).notNull(),
  title: text("title").notNull(),
  body: text("body").notNull().default(""),
  link: text("link"),
  cwe: text("cwe"),
  attack: text("attack"),
  status: text("status").notNull().default("open"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});
