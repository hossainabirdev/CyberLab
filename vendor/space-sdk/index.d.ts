import type { LibSQLDatabase } from "drizzle-orm/libsql";
import { z } from "zod";

export { z };

export declare const ACTION_BRAND: "@hatch/space-sdk/action/v1";

export type SpaceDb<
  TSchema extends Record<string, unknown> = Record<string, never>,
> = Pick<
  LibSQLDatabase<TSchema>,
  "select" | "insert" | "update" | "delete" | "run" | "all" | "get" | "batch"
>;

export type SpaceDbAccessor = <
  TSchema extends Record<string, unknown> = Record<string, never>,
>() => SpaceDb<TSchema>;

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface Ctx {
  readonly slug: string;
  readonly invocationId: string;
  readonly spaceDir: string;
  readonly db: SpaceDbAccessor;
  readonly blobs: unknown;
  readonly agent: unknown;
  readonly inference: unknown;
  readonly tool: unknown;
  emit(data: JsonValue): void;
  invalidateQueries(invalidation?: unknown): void;
}

export interface ActionDefinition<
  Req extends z.ZodType = z.ZodType,
  Res extends z.ZodType = z.ZodType,
> {
  readonly __brand: typeof ACTION_BRAND;
  readonly request: Req;
  readonly response: Res;
  readonly description?: string;
  readonly handler: (
    ctx: Ctx,
    args: z.infer<Req>,
  ) => Promise<z.infer<Res>>;
}

export type ActionFactoryInput<
  Req extends z.ZodType,
  Res extends z.ZodType,
> = {
  request: Req;
  response: Res;
  description?: string;
  handler: (ctx: Ctx, args: z.infer<Req>) => Promise<z.infer<Res>>;
};

export declare const defineAction: <
  Req extends z.ZodType,
  Res extends z.ZodType,
>(
  spec: ActionFactoryInput<Req, Res>,
) => ActionDefinition<Req, Res>;

export declare function isAction(value: unknown): value is ActionDefinition;

export type ActionsModule = Record<
  string,
  Omit<ActionDefinition, "handler"> & {
    handler: (ctx: Ctx, args: never) => Promise<unknown>;
  }
>;

/** Extract the request payload type for a given action. */
export type ActionRequest<A extends { request: z.ZodType }> = z.infer<
  A["request"]
>;

/** Extract the response payload type for a given action. */
export type ActionResponse<A extends { response: z.ZodType }> = z.infer<
  A["response"]
>;

/** Thrown by the platform runtime when a model response fails validation. */
export declare class InferenceSchemaError extends Error {
  static is(e: unknown): e is InferenceSchemaError;
}
