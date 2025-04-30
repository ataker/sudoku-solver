import Row from "./Row";
import { Square } from "@/solver/state/Square";
import { SudokuState } from "@/solver/state/SudokuState";

export default function Board ({sudokuState}:{sudokuState:SudokuState}) {
  
  return (
    <>
      {
        sudokuState.getState().map((row, index) => {
          let vals = row.map((square:Square) => {
            return square.getValue()
          })
          return (
            <Row numVals={vals} key={`row_${index}`}/>
          )
        })
        
      }
    </>
  );
}

// todo clean up the routes

// todo some css work
// tile pattern on grid?
// borders between houses
// show seeded val
// show possible values