import { renderFile } from "https://deno.land/x/dejs@0.8.0/mod.ts";
import { Context } from "../types.d.ts";

export const site = {
  async home(ctx: Context) {
    ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {
      title: "home",
    });
  },
  async info(ctx: Context) {
    let mdContent = "";
    if (ctx.curl) {
      mdContent = await ctx.curl({
        url: "https://raw.githubusercontent.com/denoland/deno/master/README.md",
        dataType: "text",
      });
    }
    ctx.response.body = await renderFile(`${Deno.cwd()}/views/info.ejs`, {
      title: "info",
      mdContent,
    });
  },
  error() {
    throw new Error("page error");
  },
};
