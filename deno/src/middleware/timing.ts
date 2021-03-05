import { Context, NextFn } from "../types.ts";

export async function timing(ctx: Context, next: NextFn) {
  const start = Date.now();
  ctx.response.headers.set("X-Request-Time", `${start}`);
  await next();
  const end = Date.now();
  const dur = end - start;
  ctx.response.headers.set("X-Response-PowerBy", "deno");
  ctx.response.headers.set("X-Response-Time", `${end}`);
  ctx.response.headers.set("X-Response-Duration", `${dur}ms`);
  ctx.logger?.log(`Response duration: ${dur}ms`);
}
