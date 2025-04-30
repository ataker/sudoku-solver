import { nakedPair } from '../../rules/nakedPair';

describe('nakedPair', () => {
  test('removes possibilities when there is a naked pair', () => {
    const value = [1, [2,5], 3, [4,5,7], [2,5], 6, [2,4,5,7], 8, 9],
          newValue = [1, [2,5], 3, [4,7], [2,5], 6, [4,7], 8, 9];

    expect(nakedPair(value)).toStrictEqual(newValue);
  });

  test('returns false when no naked pair', () => {
    const value = [1, [2,5,8], 3, [4,5], [2,5], 6, [2,4,5,7], [2, 8], 9];

    expect(nakedPair(value)).toStrictEqual(false);
  });
})