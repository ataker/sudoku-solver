import { useReducer } from 'react';
import { Square } from "./Square";
import { arrayDifference } from "../utils/arrayUtils";


function reducer(state:Square[][], action:any) {
  switch (action.type) {
    case 'REMOVE_POSSIBLE_VALUES_FROM_ROW':
      return state.map((row, rowIndex) => {
        if (rowIndex !== action.row) {
          return row;
        }
        return row.map((col, colIndex) => {
          if (action.unfoundValIndices.includes(colIndex)) {
            col.possibleValues = arrayDifference(col.possibleValues, action.foundValues);
          }
          return col;
        })
      });
    default:
      return state;
  }
}

export function useSudokuState (initialState:number[][]) {
  const [state, dispatch] = useReducer(reducer, createState(initialState));

  function createState(initialState:number[][]):Square[][] {
    let state:Square[][] = [];
    initialState.forEach((row, colNum) => {
      let rowVals:Square[] = [];
      row.forEach((val, rowNum) => {
        let square = new Square(colNum, rowNum, val);
        rowVals.push(square);
      });
      state.push(rowVals);
    });
    return state;
  }


  function step() {
    
    for(let rowCount = 0; rowCount <= 8; rowCount++){
      const rowVals = getRowVals(rowCount);
      dispatch( {type: 'REMOVE_POSSIBLE_VALUES_FROM_ROW', row: rowCount, ...rowVals});
    }
  }

  function getRowVals (rowIndex:number) {
    const row = state[rowIndex];
    const unfoundValIndices:number[] = [];
    const foundValues = row.map((square:Square) => square.getValue()).filter((val:any, index:number) => {
      if(!Array.isArray(val)) {
        return true;
      }
      unfoundValIndices.push(index);
    }) as number[];
    return {foundValues, unfoundValIndices};
  }

  return {state, step}
}