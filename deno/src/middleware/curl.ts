import { curl as $curl } from "../service/curl.ts";
import {
  Context,
  NextFn,
  ICurlOptions,
  PlainObject
} from "../types.ts";

export async function curl(ctx: Context, next: NextFn) {
  ctx.curl = (
    options: ICurlOptions
  ):Promise<PlainObject | null> => $curl(
    ctx,
    options
  );
  await next();
  ctx.curl = undefined;
}
