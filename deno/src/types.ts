import { Context as OakContext } from "./deps.ts";
import { Logger } from "./service/logger.ts";

export interface ICurlOptions {
  url?: string;
  dataType?: string;
  [key: string]: unknown;
}
export interface Context extends OakContext {
  curl?: (options: ICurlOptions) => Promise<PlainObject | null>;
  logger?: Logger;
}

export interface PlainObject {
  [key: string]: unknown;
}

export declare type SimpleValue = null | undefined | string | number | boolean;

export interface SimpleObject {
  [key: string]: SimpleValue;
}

export type NextFn = () => void;
