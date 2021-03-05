import { Context } from "../deps.ts";
import { Colors } from "../deps.ts";
import { formatTime } from "../util/time.ts";

export class Logger {
  ctx?: Context;

  constructor(ctx?: Context) {
    this.ctx = ctx;
  }

  _output(level: string, args: unknown[]) {
    const { ctx } = this;
    const ts = new Date();
    const strTs = formatTime(ts, {
      template: "{{YYYY}}.{{MM}}.{{DD}} {{hh}}:{{mm}}:{{ss}}.{{mss}}",
    });
    if (ctx) {
      args.unshift(Colors.gray(`[${ctx.request.url}]`));
      args.unshift(Colors.gray(`[${ctx.request.method}]`));
    }

    level = level.toLowerCase();
    let tagLevel = "[.]";
    switch (level) {
      case "log":
        tagLevel = Colors.white("[.]");
        break;
      case "info":
        tagLevel = Colors.blue("[*]");
        break;
      case "debug":
        tagLevel = Colors.magenta("[#]");
        break;
      case "warn":
        args = args.map((item: unknown) => {
          if (typeof item === "string") {
            return Colors.yellow(item);
          }
          return item;
        });
        tagLevel = Colors.yellow("[!]");
        break;
      case "error":
        args = args.map((item: unknown) => {
          if (typeof item === "string") {
            return Colors.red(item);
          }
          if (item instanceof Error) {
            let str = "";
            str = [
              Colors.red(item.message),
              Colors.red(item.stack || ""),
            ].join("\n");
            return str;
          }
          return item;
        });
        tagLevel = Colors.red("[x]");
        break;
    }

    args.unshift(tagLevel);
    args.unshift(Colors.gray(strTs));
    console.log(...args);
  }

  _color(type: string, args: unknown[]) {
    let colorFn: unknown = null;
    switch (type) {
      case "success":
        colorFn = Colors.green;
        break;
      case "fail":
        colorFn = Colors.red;
        break;
      case "tip":
        colorFn = Colors.cyan;
        break;
      case "stress":
        colorFn = Colors.magenta;
        break;
    }
    args = args.map((item: unknown) => {
      if (typeof item === "string" && typeof colorFn === "function") {
        return colorFn(item);
      }
      return item;
    });
    this._output("info", args);
  }

  debug(...args: unknown[]) {
    this._output("debug", args);
  }

  log(...args: unknown[]) {
    this._output("log", args);
  }

  info(...args: unknown[]) {
    this._output("info", args);
  }

  warn(...args: unknown[]) {
    this._output("warn", args);
  }

  error(...args: unknown[]) {
    this._output("error", args);
  }

  success(...args: unknown[]) {
    this._color("success", args);
  }

  fail(...args: unknown[]) {
    this._color("fail", args);
  }

  tip(...args: unknown[]) {
    this._color("tip", args);
  }

  stress(...args: unknown[]) {
    this._color("stress", args);
  }
}

export const logger = new Logger();
