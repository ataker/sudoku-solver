import { Square } from "./Square";

export class SudokuState {
  initialState:number[][];
  state:Square[][];

  constructor(initialState:number[][]) {
    this.initialState = initialState;
    this.state = this.createState(initialState);
  }

  private createState(initialState:number[][]) {
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

  public getState() {
    return this.state;
  }
}