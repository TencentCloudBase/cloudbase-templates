import { Context } from "../types.d.ts";
import { Logger } from "../service/logger.ts";

export async function logger(ctx: Context, next: Function) {
  ctx.logger = new Logger(ctx);
  await next();
}
