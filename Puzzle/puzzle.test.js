const { puzzleSolver, pyramidConstructor } = require('./puzzle.js');
const should = require('should');

describe('puzzleSolver', function () {
  it('should exist', function () {
    should.exist(puzzleSolver);
  });

  it('should be a function', function () {
    puzzleSolver.should.be.a.Function;
  });

  it('should return no valid path, please provide a vaild pyramid when input array.length is less than 2', function () {
    var pyramid = pyramidConstructor([[1]]);
    var result = puzzleSolver(pyramid, 2);
    should.equal(result, 'no valid path, please provide a vaild pyramid');
  });

  it('should return LR when input array is [[1], [2, 3], [4, 1, 1]] and target is 2', function () {
    var pyramid = pyramidConstructor([[1], [2, 3], [4, 1, 1]]);
    var result = puzzleSolver(pyramid, 2);
    should.equal(result, 'LR');
  });

  it('should return LR when input array is [[1], [2, 3], [4, 1, 1]] and target is 8', function () {
    var pyramid = pyramidConstructor([[1], [2, 3], [4, 1, 1]]);
    var result = puzzleSolver(pyramid, 8);
    should.equal(result, 'LL');
  });

  it('should return LRLL when input array is [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]]  and target is 720', function () {
    var pyramid = pyramidConstructor([
      [2],
      [4, 3],
      [3, 2, 6],
      [2, 9, 5, 2],
      [10, 5, 2, 15, 5],
    ]);
    var result = puzzleSolver(pyramid, 720);
    should.equal(result, 'LRLL');
  });

  it('should return LR when input array is [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]] and target is 160', function () {
    var pyramid = pyramidConstructor([
      [2],
      [4, 3],
      [3, 2, 6],
      [2, 9, 5, 2],
      [10, 5, 2, 15, 5],
    ]);
    var result = puzzleSolver(pyramid, 160);
    should.equal(result, 'LRRL');
  });

  it('should return no valid path, please change a valid target value when target value is not approchable', function () {
    var pyramid = pyramidConstructor([
      [2],
      [4, 3],
      [3, 2, 6],
      [2, 9, 5, 2],
      [10, 5, 2, 15, 5],
    ]);
    var result = puzzleSolver(pyramid, 7);
    should.equal(result, 'no valid path, please change a valid target value');
  });
});
