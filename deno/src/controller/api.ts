import { State } from "../deps.ts";

export const api = {
  info(ctx: State) {
    ctx.response.body = {
      code: 0,
      msg: "ok",
      data: "api info",
    };
  },
  env(ctx: State) {
    ctx.response.body = {
      code: 0,
      msg: "ok",
      data: Deno.env.toObject(),
    };
  },
  error() {
    throw new Error("api error");
  },
};
