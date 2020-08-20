import { send } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { Context } from "../types.d.ts";

export async function statics(ctx: Context) {
  const pathname = ctx.request.url?.pathname;
  if (pathname) {
    try {
      await send(ctx, pathname, {
        root: `${Deno.cwd()}/public`,
      });
    } catch (err) {
      if (ctx.response.status === 404) {
        ctx.response.body = "";
      }
    }
  }
}
