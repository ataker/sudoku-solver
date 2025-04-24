// return values in the first array but not in the second
export function arrayDifference (arr1:number[], arr2:number[]) {
  return arr1.filter((val) => !arr2.includes(val))
}

// return values unique in either array
export function arrayUnique (...arrs:number[][]) {
  let combinedArr:number[] = [];
  arrs.forEach((arr) => combinedArr.push(...arr))

  // some silly thoughts
  // sort array then step through, if arr[n] != arr[n+1]
  // with a step of 2
  // although we want all unique vals, that would be ok for just the first one
  // not going to do above
  
  // this will only work up to the number 9
  // fill array with 0s
  let newArr = new Array(10).fill(0);
  // walk through combined array and increment at index value
  combinedArr.forEach(val => newArr[val]++);
  let finalArr = [];
  // add each count of 1 to new array
  while (newArr.indexOf(1) !== -1) {
    const index = newArr.indexOf(1);
    finalArr.push(index);
    newArr[index]++;
  }
  return finalArr;
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

// find index of array that has value
export function indexOfArrayOfArrayHasValue(val:number, ...arrs:number[][]) {
  // only return one index
  return arrs.findIndex((arr) => {
    return arr.indexOf(val) !== -1;
  })

}