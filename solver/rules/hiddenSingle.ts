import { arrayUnique, indexOfArrayOfArrayHasValue } from "../utils/arrayUtils";

// if a possible value is unique in its row/column/house, that is the value

export function hiddenSingle(vals:any[]) {
  
  const arrs = vals.filter((val) => {
    return Array.isArray(val);
  });
  
  let uniqueVals = arrayUnique(...arrs);
  if (uniqueVals.length) {
    let uniqueVal = uniqueVals[0];
    const squareToUpdate = indexOfArrayOfArrayHasValue(uniqueVal, ...arrs);
    
     vals[vals.indexOf(arrs[squareToUpdate])] = uniqueVal;
     return vals;
  }
  
  return false;
}


