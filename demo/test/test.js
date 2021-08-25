const assert = require('assert');

const { makeChessboard } = require('../src/task1');

describe('Demo tasks', () => {
  describe('task1: makeChessboard', () => {
    it('should return instruction with status "failed" with length missing', () => {
      assert.deepEqual(makeChessboard(), { status: 'failed', reason: 'Length is missing' });
    });

    it('should return instruction with status "failed" with width missing', () => {
      assert.deepEqual(makeChessboard(10), { status: 'failed', reason: 'Width is missing' });
    });

    it('should return instruction with status "failed" with symbol missing', () => {
      assert.deepEqual(makeChessboard(8, 8), { status: 'failed', reason: 'Symbol is missing' });
    });

    it('should return chessboard string built with symbol "*" of size: 5x5', () => {
      const chessboard = "* * *\n * * \n* * *\n * * \n* * *";
      
      assert.equal(makeChessboard(5, 5, '*'), chessboard);
    });

    it('should return chessboard string built with symbol "*" of size: 2x3', () => {
      const chessboard = "* *\n * ";
      
      assert.equal(makeChessboard(2, 3, '*'), chessboard);
    });


    it('should return chessboard string built with symbol "#" of size: 1x5', () => {
      const chessboard = "# # #";
      
      assert.equal(makeChessboard(1, 5, '#'), chessboard);
    });
    
  });
  describe('task2: blabla', () => {

  });
});