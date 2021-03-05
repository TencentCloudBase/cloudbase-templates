import { Context, NextFn } from "../types.ts";
import { Logger } from "../service/logger.ts";

export async function logger(ctx: Context, next: NextFn) {
  ctx.logger = new Logger(ctx);
  await next();
}
