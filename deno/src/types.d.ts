import { Context as OakContext } from "https://deno.land/x/oak@v6.0.1/mod.ts";
import { Logger } from "./service/logger.ts";

export interface Context extends OakContext {
  curl?: Function;
  logger?: Logger;
}
