/**
 * 简单模板函数
 * @method substitute
 * @param {String} str 要替换模板的字符串
 * @param {Object} obj 模板对应的数据对象
 * @param {RegExp} [reg=/\\?\{\{([^{}]+)\}\}/g] 解析模板的正则表达式
 * @return {String} 替换了模板的字符串
 * @example
 * substitute('{{city}}欢迎您', {city:'北京'}); // '北京欢迎您'
 */

export function substitute(str: string, obj: any, reg?: RegExp) {
  return str.replace(reg || (/\\?\{\{([^{}]+)\}\}/g), (match, name) => {
    if (match.charAt(0) === "\\") {
      return match.slice(1);
    }
    // 注意：obj[name] != null 等同于 obj[name] !== null && obj[name] !== undefined
    return (obj[name] != null) ? obj[name] : "";
  });
}

/**
 * 获取36进制随机字符串
 * @method getRnd36
 * @param {Float} [rnd] 随机数，不传则生成一个随机数
 * @return {String} 转成为36进制的字符串
 * @example
 * getRnd36(0.5810766832590446); // 'kx2pozz9rgf'
 */

export function getRnd36(rnd?: number) {
  rnd = rnd || Math.random();
  return rnd.toString(36).replace(/^0./, "");
}

/**
 * 获取36进制日期字符串
 * @method getTime36
 * @param {Date} [date] 符合规范的日期字符串或者数字，不传参数则使用当前客户端时间
 * @return {String} 转成为36进制的字符串
 * @example
 * getTime36('2020'); // 'k4ujaio0'
 */

export function getTime36(date?: number | Date) {
  date = date ? new Date(date) : new Date();
  return date.getTime().toString(36);
}
