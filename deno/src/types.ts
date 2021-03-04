import { Context as OakContext } from "./deps.ts";
import { Logger } from "./service/logger.ts";

export interface Context extends OakContext {
  curl?: Function;
  logger?: Logger;
}

export interface PlainObject {
  [key: string]: unknown;
}

export declare type SimpleValue = null | undefined | string | number | boolean;

export interface SimpleObject {
  [key: string]: SimpleValue;
}
