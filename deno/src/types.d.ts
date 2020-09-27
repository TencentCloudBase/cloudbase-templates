import { Context as OakContext } from "./deps.ts";
import { Logger } from "./service/logger.ts";

export interface Context extends OakContext {
  curl?: Function;
  logger?: Logger;
}
