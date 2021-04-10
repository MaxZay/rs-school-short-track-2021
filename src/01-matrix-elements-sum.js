/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const nullX = [];
  const nullY = [];
  let flag = false;
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      flag = true;
      if (matrix[i][j] === 0) {
        nullX.push(j);
        nullY.push(i);
      }
      if (matrix[i][j] !== 0) {
        for (let l = 0; l < nullX.length; l++) {
          if (i > nullY[l] && j === nullX[l]) {
            flag = false;
            break;
          }
        }
        if (flag === true) {
          result += matrix[i][j];
        }
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
