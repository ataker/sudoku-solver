// return values in the first array but not in the second
export function arrayDifference (arr1:number[], arr2:number[]) {
  return arr1.filter((val) => !arr2.includes(val))
}