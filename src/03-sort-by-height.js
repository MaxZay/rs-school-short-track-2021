/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compare(a, b) {
  return a - b;
}

function sortByHeight(arr) {
  const result = [];
  const sortedArr = arr.filter((u) => (u !== -1));
  let index = 0;
  sortedArr.sort(compare);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(arr[i]);
    } else {
      result.push(sortedArr[index]);
      index++;
    }
  }
  return result;
}

module.exports = sortByHeight;
