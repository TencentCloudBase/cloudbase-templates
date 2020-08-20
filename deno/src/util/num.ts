/**
 * 修正补位
 * @method fixTo
 * @param {Number|String} num 要补位的数字
 * @param {Number} [w=2] w 补位数量
 * @return {String} 经过补位的字符串
 * @example
 * fixTo(0, 2);	//return '00'
 */

export function fixTo(num: number, width: number) {
  let str: string = num.toString();
  width = Math.max((width || 2) - str.length + 1, 0);
  return new Array(width).join("0") + str;
}
