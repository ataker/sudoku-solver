import Row from "./Row";
import { Square } from "@/solver/state/Square";
import { SudokuState } from "@/solver/state/SudokuState";
import { NumberBoxProps } from './NumberBox'
import { StyleSheet } from "react-native";

export default function Board ({sudokuState}:{sudokuState:SudokuState}) {
  return (
    <>
      {
        sudokuState.getState().map((row, index) => {
          let vals:NumberBoxProps[] = row.map((square:Square) => {
            let boxInfo : NumberBoxProps = {
              numVal: square.value,
              possibleValues: square.possibleValues,
              crossedValues: square.crossedValues,
              seededValue: square.seededValue,
              rowNum: index,
            }
            return boxInfo;
          })
          
          return (
            <Row numVals={vals} key={`row_${index}`}/>
          )
        })
        
      }
    </>
  );
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomWidth: 2
  }
})

// todo clean up the routes

// todo some css work
// tile pattern on grid?
// borders between houses
// show seeded val
// show possible values