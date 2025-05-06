export class Square {
  column: number;
  row: number;
  house: number;
  value?: number;
  possibleValues: number[] = [1,2,5,8]; // temp vals for testing
  crossedValues: number[] = [3, 9]; // temp vals for testing
  seededValue: boolean;

  constructor (column:number, row:number, value:number) {
    this.column = column;
    this.row = row;
    this.value = value;
    this.seededValue = value !== 0;
    this.house = this.determineHouse(column, row);
  }

  private determineHouse(column:number, row:number) {
    return (Math.floor(row / 3) * 3) + (Math.floor(column / 3));
  }

  public getValue() {
    return this.value || this.possibleValues;
  }

  public setValue(value:number) {
    this.value = value;
  }

  public setPossibleValue(possibleValues:number[]) {
    this.possibleValues = possibleValues;
  }

  public setCrossedValue(crossedValues:number[]) {
    // todo should this also remove it from possibleValues?
    this.crossedValues = crossedValues;
  }

  public getVisibleSquares(){
    ///hmmm....
  }

  
}