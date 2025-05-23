import { SafeAreaView } from 'react-native-safe-area-context';
import { useSudokuState } from '@/solver/state/SudokuState';
import Board from "./components/Board";
import { Button } from 'react-native';

const initState = [
  // good sudoku beginner puzzle 1
  [0,4,9,0,0,0,0,3,0],
  [0,5,0,6,1,0,0,0,0],
  [0,0,8,0,2,9,5,0,6],
  [8,0,0,9,0,7,0,0,4],
  [7,0,0,0,0,0,0,8,1],
  [0,2,5,0,4,1,3,0,0],
  [2,0,0,0,7,6,0,1,0],
  [5,0,0,4,0,8,7,0,0],
  [0,8,7,0,0,0,0,9,5]
];

export default function Index() {
  const {state, step} = useSudokuState(initState);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Board sudokuState={state}></Board>
      <Button title='Step' onPress={step}></Button>
    </SafeAreaView>
  );
}
