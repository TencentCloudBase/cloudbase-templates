import { Context, NextFn } from "../types.ts";
import { curl as $curl } from "../service/curl.ts";

export async function curl(ctx: Context, next: NextFn) {
  ctx.curl = (options: any) => $curl(ctx, options);
  await next();
  ctx.curl = undefined;
}
