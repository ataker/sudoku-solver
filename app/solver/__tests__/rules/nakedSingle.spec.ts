import { nakedSingle } from '../../rules/nakedSingle';

describe('nakedSingle', () => {
  test('replaces one value when only one naked single', () => {
    const value = [1, 2, 3, 4, [5], 6, 7, 8, 9],
          newValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(nakedSingle(value)).toStrictEqual(newValue);
  });

  test('replaces first one value when multiple naked singles', () => {
    const value = [1, [2], 3, 4, [5], 6, [7], 8, 9],
          newValue = [1, 2, 3, 4, [5], 6, [7], 8, 9];

    expect(nakedSingle(value)).toStrictEqual(newValue);
  });

  test('returns false when no naked singles', () => {
    const value = [1, [2,5], 3, 4, [2,5], 6, 7, 8, 9];

    expect(nakedSingle(value)).toStrictEqual(false);
  });
})