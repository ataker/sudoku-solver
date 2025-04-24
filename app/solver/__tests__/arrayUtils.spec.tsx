import { 
  arrayDifference, 
  arrayUnique,
  replaceAtValue,
  indexOfArrayOfArrayHasValue
} from '../utils/arrayUtils';

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

describe('arrayUnique', () => {
  test('returns array with length of 1 when array difference is 1', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3];

    expect(arrayUnique(arr1, arr2)).toStrictEqual([4]);
  })
  test('returns array with length of 3 when array difference is 3', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [1, 2, 3, 6, 8, 9];

    expect(arrayUnique(arr1, arr2)).toStrictEqual([4, 5, 7]);
  })
  test('returns any values in arr2 that are not in arr1', () => {
    const arr1 = [1];
    const arr2 = [1, 2, 3, 6, 8, 9];

    expect(arrayUnique(arr1, arr2)).toStrictEqual([ 2, 3, 6, 8, 9]);
  })
  test('returns any values unique in either array', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 6, 7];

    expect(arrayUnique(arr1, arr2)).toStrictEqual([4,6,7]);
  })
  test('returns any values unique in more than two arrays', () => {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 6, 7];
    const arr3 = [1, 2, 9];

    expect(arrayUnique(arr1, arr2, arr3)).toStrictEqual([4,6,7,9]);
  })

  test('empty array when arrays are identical', () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    expect(arrayUnique(arr1, arr2)).toStrictEqual([]);
  })
})

describe('replaceAtValue', () => {
  test('replaces one value', () => {
    const arr = [1, 2, 3, 4, 0, 6, 7, 8, 9],
          value = 0,
          newValue = [2,5];

    expect(replaceAtValue(arr, value, newValue)).toStrictEqual([1, 2, 3, 4, [2,5], 6, 7, 8, 9]);
  })

  test('replaces multiple values', () => {
    const arr = [1, 0, 3, 4, 0, 6, 7, 8, 9],
          value = 0,
          newValue = [2,5];

    expect(replaceAtValue(arr, value, newValue)).toStrictEqual([1, [2, 5], 3, 4, [2,5], 6, 7, 8, 9]);
  })

  test('returns same value when value and newValue are equal', () => {
    const arr = [1, 0, 3, 4, 0, 6, 7, 8, 9],
          value = 0,
          newValue = 0;

    expect(replaceAtValue(arr, value, newValue)).toStrictEqual([1, 0, 3, 4, 0, 6, 7, 8, 9]);
  })
})


describe('indexOfArrayOfArrayHasValue', () => {
  test('finds value', () => {
    const arrs = [ [ 2, 5 ], [ 2, 3 ], [ 2, 5 ], [ 2, 5, 7 ] ],
          value = 3;
          
    expect(indexOfArrayOfArrayHasValue(value, ...arrs)).toStrictEqual(1);
  })

  test('finds value', () => {
    const arrs = [ [ 2, 5 ], [ 2, 3 ], [ 2, 5 ], [ 2, 5, 7 ] ],
          value = 7;
          
    expect(indexOfArrayOfArrayHasValue(value, ...arrs)).toStrictEqual(3);
  })
  test('returns -1 if value is not found', () => {
    const arrs = [ [ 2, 5 ], [ 2, 3 ], [ 2, 5 ], [ 2, 5, 7 ] ],
          value = 1;
          
    expect(indexOfArrayOfArrayHasValue(value, ...arrs)).toStrictEqual(-1);
  })
})