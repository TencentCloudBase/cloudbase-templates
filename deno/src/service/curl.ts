import { Context } from "../types.d.ts";
import {
  getTime36,
  getRnd36,
} from "../util/str.ts";

const fname = "[curl]";

export async function curl(ctx: Context, options: any) {
  const extra = {
    url: "",
    dataType: "json",
  };

  const conf = {
    ...extra,
    ...options,
  };

  const reqId = `req_${getTime36()}_${getRnd36()}`;
  const startTime = Date.now();

  const fetchOptions = { ...conf };
  Object.keys(extra).forEach((key) => {
    delete fetchOptions[key];
  });

  const startMsg = [
    `${fname} start:`,
    `id: ${reqId}`,
    `url: ${conf.url}`,
    `options: ${JSON.stringify(fetchOptions)}`,
  ].join("\n");
  ctx.logger?.info(startMsg);

  let error = null;
  let rs = null;
  let data = null;
  try {
    rs = await fetch(conf.url, fetchOptions);
    if (conf.dataType === "json") {
      data = await rs.json() || null;
    } else {
      data = await rs.text() || null;
    }
  } catch (err) {
    error = err;
  }

  if (!data && !error) {
    error = new Error("response empty");
  }

  if (error) {
    const errMsg = [
      `${fname} error:`,
      `id: ${reqId}`,
      `duration: ${Date.now() - startTime}ms`,
      `status: ${rs?.status}`,
      `message: ${error.message}`,
    ].join("\n");
    ctx.logger?.fail(errMsg);
    throw error;
  } else {
    const strRs = JSON.stringify(data);
    let rsMsg = "";
    if (strRs.length > 600) {
      const pre300 = strRs.slice(0, 300);
      const end300 = strRs.slice(strRs.length - 300);
      rsMsg = `${pre300} ....... ${end300}`;
    } else {
      rsMsg = strRs;
    }
    const endMsg = [
      `${fname} end:`,
      `id: ${reqId}`,
      `duration: ${Date.now() - startTime}ms`,
      `status: ${rs?.status}`,
      `result: ${rsMsg}`,
    ].join("\n");
    ctx.logger?.success(endMsg);
  }

  return data;
}
