import { noteRow } from '../notes/noteRow';

describe('checkRow', () => {
  test('returns array with length of 1 when array difference is 1', () => {
    const row = [1, 2, 3, 4, 0, 6, 7, 8, 9];

    expect(noteRow(row)).toStrictEqual([1, 2, 3, 4, [5], 6, 7, 8, 9]);
  })

  test('returns array with length of 2 when array difference is 2', () => {
    const row = [1, 0, 3, 4, 0, 6, 7, 8, 9];

    expect(noteRow(row)).toStrictEqual([1, [2,5], 3, 4, [2,5], 6, 7, 8, 9]);
  })
});