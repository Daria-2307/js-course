/*
* A function that build a chessboard of length x width 
* with a symbol instead of black field
* 
* @param length: number
* @param width: number
* @param symbol: string
*
* @return chessboard: string
*
* @todo add validation errors ('wrong type')
*/
const makeChessboard = (length, width, symbol) => {
  // validations
  if (!length) {
    return makeInstruction('Length is missing');
  }
  if (!width) {
    return makeInstruction('Width is missing');
  }
  if (!symbol) {
    return makeInstruction('Symbol is missing');
  }
  // main algorithm
  let chessboard = '';

  for (let cell = 1, row = 1; cell <= length * width; cell++) {
    chessboard += cell % 2 ? symbol : ' ';

    if (cell === row * width && row !== length) {
      row++;
      chessboard += '\n';
    }
  }

  return chessboard;
};

const makeInstruction = ( reason = 'Error', status = 'failed' ) => ({ status, reason });

module.exports = {
  makeChessboard
}; 