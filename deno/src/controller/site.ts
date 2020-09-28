import { renderFile, State } from "../deps.ts";

export const site = {
  async home(ctx: State) {
    const pathname = Deno.env.get("PATHNAME") || '';
    ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {
      title: "home",
      pathname,
    });
  },
  async info(ctx: State) {
    let mdContent = "";
    if (ctx.curl) {
      mdContent = await ctx.curl({
        url: "https://raw.githubusercontent.com/denoland/deno/master/README.md",
        dataType: "text",
      });
    }
    const pathname = Deno.env.get("PATHNAME") || '';
    ctx.response.body = await renderFile(`${Deno.cwd()}/views/info.ejs`, {
      title: "info",
      pathname,
      mdContent,
    });
  },
  error() {
    throw new Error("page error");
  },
};
