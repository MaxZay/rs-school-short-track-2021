/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString().split('');
  str = str.map((u) => (parseInt(u, 10)));
  const min = Math.min(...str);
  str.splice(str.indexOf(min), 1);
  return parseInt(str.join(''), 10);
}

module.exports = deleteDigit;
