import { send } from "../deps.ts";
import { Context } from "../types.ts";

export async function statics(ctx: Context) {
  const pathname = ctx.request.url?.pathname;
  if (pathname) {
    await send(ctx, pathname, {
      root: `${Deno.cwd()}/public`,
    });
  }
}
