/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  console.log(array);
  let left = 0;
  let right = array.length - 1;
  let mid = 0;
  const flag = true;
  while (flag) {
    mid = Math.floor(left + (right - left) / 2);
    if (mid === right - 1 && left === right - 1 && array[left] !== value) {
      return right;
    }
    if (value < array[mid]) {
      right = mid;
    } else if (value > array[mid]) {
      left = mid;
    } else {
      break;
    }
  }
  return mid;
}

module.exports = findIndex;
