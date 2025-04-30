import { getColumn, getSquare } from '../utils/matrixUtils'

const testMatrix = [
  [0,2,3],
  [3,4,5],
  [8,7,6]
]

const testSudoku = [
  [1,1,1,2,2,2,3,3,3],
  [1,1,1,2,2,2,3,3,3],
  [1,1,1,2,2,2,3,3,3],
  [4,4,4,5,5,5,6,6,6],
  [4,4,4,5,5,5,6,6,6],
  [4,4,4,5,5,5,6,6,6],
  [7,7,7,8,8,8,9,9,9],
  [7,7,7,8,8,8,9,9,9],
  [7,7,7,8,8,8,9,9,9]
]

describe('getColumn', () => {
  it('returns first items when colNum is 0', () => {
    expect(getColumn(0, testMatrix)).toStrictEqual([0,3,8]);
  });

  it('returns third items when colNum is 2', () => {
    expect(getColumn(2, testMatrix)).toStrictEqual([3,5,6]);
  });

  it('throws error when colNum is out of bounds', () => {
    expect(() => {
      getColumn(66, testMatrix)
    }).toThrow();
  });
})

describe("getSquare", () => {
  it('returns first square when top and left are 0', () => {
    expect(getSquare(testSudoku, 0, 0)).toStrictEqual([[1,1,1],[1,1,1],[1,1,1]]);
  });

  it('returns middle square when top and left are 4', () => {
    expect(getSquare(testSudoku, 3, 3)).toStrictEqual([[5,5,5],[5,5,5],[5,5,5]]);
  });

  it('returns last square when top and left are 8', () => {
    expect(getSquare(testSudoku, 6, 6)).toStrictEqual([[9,9,9],[9,9,9],[9,9,9]]);
  });
  it('returns first square plus one row and column when top and left are 0 and size is 4', () => {
    expect(getSquare(testSudoku, 0, 0, 4)).toStrictEqual([[1,1,1,2],[1,1,1,2],[1,1,1,2],[4,4,4,5]]);
  });
  it('throws error when top and left are out of bounds', () => {
    expect(() => {
      getSquare(testSudoku, 66, 66);
    }).toThrow();
  });
});