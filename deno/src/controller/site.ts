import { renderFile, State } from "../deps.ts";

export const site = {
  async home(ctx: State) {
    const req = ctx.request;
    ctx.response.body = await renderFile(`${Deno.cwd()}/views/home.ejs`, {
      title: "home",
      pathname: req?.url?.pathname || '/',
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
    ctx.response.body = await renderFile(`${Deno.cwd()}/views/info.ejs`, {
      title: "info",
      mdContent,
    });
  },
  error() {
    throw new Error("page error");
  },
};
