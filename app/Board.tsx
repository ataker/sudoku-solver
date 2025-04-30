import Row from "./Row";
import { Square } from "./Square";
import { SudokuState } from "./SudokuState";

export default function Board (sudokuState:SudokuState) {
  
  return (
    <>
      {
        sudokuState.sudokuState.getState().map((row) => {
          let vals = row.map((square:Square) => {
            return square.getValue()
          })
          return (
            <Row numVals={vals}/>
          )
        })
        
      }
    </>
  );
}