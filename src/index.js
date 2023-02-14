
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  } else {
    let sortSnake = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i % 2 === 0) {
          sortSnake.push(matrix[i][j])
        }
        else {
          sortSnake.push(matrix[i][matrix[i].length - 1 - j])
        }
      }
    }
    return sortSnake
  }
}
