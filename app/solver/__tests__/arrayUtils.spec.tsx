import { arrayDifference } from '../utils/arrayUtils';

describe('arrayDifference', () => {
  test('returns array with length of 1 when array difference is 1', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3];

    expect(arrayDifference(arr1, arr2)).toStrictEqual([4]);
  })
  test('returns array with length of 3 when array difference is 3', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [1, 2, 3, 6, 8, 9];

    expect(arrayDifference(arr1, arr2)).toStrictEqual([4, 5, 7]);
  })
  test('does not return any values in arr2 that are not in arr1', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 6, 7];

    expect(arrayDifference(arr1, arr2)).toStrictEqual([4]);
  })
  test('empty array when all arr1 elements are in arr2', () => {
    const arr1 = [1];
    const arr2 = [1, 2, 3, 6, 8, 9];

    expect(arrayDifference(arr1, arr2)).toStrictEqual([]);
  })
  test('empty array when arrays are identical', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(arrayDifference(arr1, arr2)).toStrictEqual([]);
  })
})