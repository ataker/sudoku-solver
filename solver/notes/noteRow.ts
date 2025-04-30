import { arrayDifference, replaceAtValue } from "../utils/arrayUtils";

// so here's my first thought
// return an array that looks like an inverse of the numVals
// numVals is current filled in squares with empty squares as 0
// return array with [0] as filled out and array of possibilities

const POSSIBLE_NUMBERS = [1,2,3,4,5,6,7,8,9];

export function noteRow (row:number[]) {
  // get difference between possible answers and what was sent in
  const possibleAnswers = arrayDifference(POSSIBLE_NUMBERS, row);

  return replaceAtValue(row, 0, possibleAnswers);
}

