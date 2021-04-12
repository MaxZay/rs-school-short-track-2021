/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function hasProperty(obj, prop) {
  const arr = Object.getOwnPropertyNames(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === prop) {
      return true;
    }
  }
  return false;
}

function getDNSStats(domains) {
  const result = {};
  let arr = [];
  let current = '';
  let size;
  for (let i = 0; i < domains.length; i++) {
    arr = domains[i].split('.').reverse();
    current = '';
    for (let j = 0; j < arr.length; j++) {
      current += `.${arr[j]}`;
      size = 0;
      if (!hasProperty(result, `${current}`)) {
        for (let a = i; a < domains.length; a++) {
          if (domains[a].includes(arr[j])) {
            size++;
          }
        }
        result[`${current}`] = size;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
