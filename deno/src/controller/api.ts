import { Context } from "../types.d.ts";

export const api = {
  info(ctx: Context) {
    ctx.response.body = {
      code: 0,
      msg: "ok",
      data: "api info",
    };
  },
  error() {
    throw new Error("api error");
  },
};
