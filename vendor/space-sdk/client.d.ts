import type { QueryClient } from "@tanstack/react-query";
import type { input as ZodInput, ZodType } from "zod";

export declare const spaceQueryClient: QueryClient;

export declare class SpaceActionError extends Error {
  readonly status: number;
  readonly detail: string;
  readonly issues: readonly unknown[];
  constructor(message: string, status: number, detail?: string);
}

/** Request shape for an action on a typed action client, by name. */
export type ApiRequest<
  C extends Record<string, (args: never) => Promise<unknown>>,
  K extends keyof C,
> = Parameters<C[K]>[0];

/** Response shape for an action on a typed action client, by name. */
export type ApiResponse<
  C extends Record<string, (args: never) => Promise<unknown>>,
  K extends keyof C,
> = Awaited<ReturnType<C[K]>>;

type ClientActionShape = {
  request: ZodType;
  response: ZodType;
};

export type ActionClient<A extends Record<string, ClientActionShape>> = {
  [K in keyof A]: (
    args: ZodInput<A[K]["request"]>,
  ) => Promise<import("@hatch/space-sdk").ActionResponse<A[K]>>;
};

interface ClientOptions {
  /** Override the action endpoint (defaults to `./actions`). */
  endpoint?: string;
  /** Inject a custom fetch (mostly for tests). */
  fetch?: typeof globalThis.fetch;
}

export declare function createActionClient<
  A extends Record<string, ClientActionShape>,
>(options?: ClientOptions): ActionClient<A>;
