export {
  Application,
  Router,
  send,
  Context,
} from "https://deno.land/x/oak@v6.0.1/mod.ts";

import { State as OakState } from "https://deno.land/x/oak@v6.0.1/application.ts";
export type State = OakState;

export { renderFile } from "https://raw.githubusercontent.com/syumai/dejs/master/mod.ts";

import * as fmtColors from "https://deno.land/std@0.65.0/fmt/colors.ts";
export const Colors = fmtColors;
