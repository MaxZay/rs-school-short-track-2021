/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let s = str;
  let num = 0;
  const i = 0;
  while (i !== s.length) {
    num = 0;
    for (let j = i; j < s.length; j++) {
      if (s[j] === s[i]) {
        num++;
      } else {
        break;
      }
    }
    if (num === 1) {
      result += `${s[i]}`;
    } else {
      result += `${num}${s[i]}`;
    }
    s = s.substr(num);
  }
  return result;
}

module.exports = encodeLine;
