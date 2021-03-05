import { renderFile } from "../deps.ts";
import { Context, NextFn } from "../types.ts";

export async function error(ctx: Context, next: NextFn) {
  try {
    await next();
  } catch (err) {
    const { request, response } = ctx;
    const { status } = response;

    if (status === 404) {
      const msg = "Not found";
      ctx.logger?.error("404", msg);
      response.body = await renderFile(`${Deno.cwd()}/views/error.ejs`, {
        title: "Empty",
        status: response.status,
        message: msg,
        stack: "",
      });
    } else {
      ctx.logger?.error(err);
      const pathname = request.url?.pathname;
      if (pathname && pathname.indexOf("/api/") === 0) {
        response.body = {
          code: -1,
          msg: err.message,
          data: err.stack,
        };
      } else {
        response.body = await renderFile(`${Deno.cwd()}/views/error.ejs`, {
          title: "Error",
          status,
          message: err.message,
          stack: err.stack,
        });
      }
    }
  }
}
