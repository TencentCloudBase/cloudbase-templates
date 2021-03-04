import { Context } from "../types.ts";
import { curl as $curl } from "../service/curl.ts";

export async function curl(ctx: Context, next: Function) {
  ctx.curl = (options: any) => $curl(ctx, options);
  await next();
  ctx.curl = undefined;
}
