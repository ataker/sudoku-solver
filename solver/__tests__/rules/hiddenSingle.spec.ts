import { hiddenSingle } from '../../rules/hiddenSingle';

describe('hiddenSingle', () => {
  test('replaces one value when only one hidden single', () => {
    const value = [1, [2, 5], 3, 4, [2, 5], 6, [2, 5, 7], 8, 9],
          newValue = [1, [2, 5], 3, 4, [2, 5], 6, 7, 8, 9];

    expect(hiddenSingle(value)).toStrictEqual(newValue);
  });

  test('replaces first one value when multiple hidden singles', () => {
    const value = [1, [2, 5], [2, 3], 4, [2, 5], 6, [2, 5, 7], 8, 9],
    newValue = [1, [2, 5], 3, 4, [2, 5], 6, [2, 5, 7], 8, 9];

    expect(hiddenSingle(value)).toStrictEqual(newValue);
  });

  test('returns false when no hidden singles', () => {
    const value = [1, [2,5], 3, 4, [2,5], 6, 7, 8, 9];

    expect(hiddenSingle(value)).toStrictEqual(false);
  });
})