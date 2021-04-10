/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let max = '';
  let min = '';
  let result = '';
  if (s1.length >= s2.length) {
    max = s1;
    min = s2;
  } else {
    max = s2;
    min = s1;
  }
  for (let i = 0; i < max.length; i++) {
    if (min.includes(max[i])) {
      min = min.replace(`${max[i]}`, '');
      result += max[i];
    }
  }
  return result.length;
}

module.exports = getCommonCharacterCount;
