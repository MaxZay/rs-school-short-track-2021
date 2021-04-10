/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function reducer(a, b) {
  return a + b;
}

function getSumOfDigits(n) {
  let number = n;
  let flag = false;
  let int = 0;
  while (flag !== true) {
    int = number.toString().split('').map((u) => (parseInt(u, 10))).reduce(reducer);
    if (int > 9) {
      number = int;
    } else {
      flag = true;
    }
  }

  return int;
}

module.exports = getSumOfDigits;
