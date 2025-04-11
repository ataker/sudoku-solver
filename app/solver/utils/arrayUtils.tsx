// return values in the first array but not in the second
export function arrayDifference (arr1:number[], arr2:number[]) {
  return arr1.filter((val) => !arr2.includes(val))
}

// replaces value with newValue in array
export function replaceAtValue(arr:number[], value:number, newValue:any) {
  if (value === newValue) {
    // let's not get into an infinite loop
    return arr;
  }

  while(arr.indexOf(value) >= 0 ){
    arr.splice(arr.indexOf(value), 1, newValue)
  }
  return arr;

}