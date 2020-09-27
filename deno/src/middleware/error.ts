import { renderFile } from "../deps.ts";
import { Context } from "../types.d.ts";

export async function error(ctx: Context, next: Function) {
  try {
    await next();
  } catch (err) {
    ctx.logger?.error(err);
    ctx.response.status = 500;
    const pathname = ctx.request.url?.pathname;
    if (pathname && pathname.indexOf("/api/") === 0) {
      ctx.response.body = {
        code: -1,
        msg: err.message,
        data: err.stack,
      };
    } else {
      ctx.response.body = await renderFile(`${Deno.cwd()}/views/error.ejs`, {
        title: "Error",
        status: ctx.response.status,
        message: err.message,
        stack: err.stack,
      });
    }
  }
}
