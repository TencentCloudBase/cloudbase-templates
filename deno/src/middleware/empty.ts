import { renderFile } from "../deps.ts";
import { Context } from "../types.d.ts";

export async function empty(ctx: Context, next: Function) {
  await next();
  const {
    response,
  } = ctx;
  if (!response.body) {
    const msg = "Not found";
    ctx.logger?.error("404", msg);
    response.status = 404;
    response.body = await renderFile(`${Deno.cwd()}/views/error.ejs`, {
      title: "Empty",
      status: response.status,
      message: msg,
      stack: "",
    });
  }
}
