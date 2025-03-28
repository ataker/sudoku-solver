export function getColumn(columnNum:number, rows:number[][]) {
  let col:number[] = [];
  rows.forEach((row) => {
    if (columnNum > row.length) {
      throw Error(`columnNum out of range`)
    }
    col.push(row[columnNum])
  })
  return col;
}

export function getSquare(rows:number[][], top:number, left:number, size:number = 3) {
  let square:number[][] = [],
      wantedRows = rows.slice(top, top + size);
  if(top > rows[0].length) {
    throw Error(`top out of range`)
    //should probably do the same for left and size
  }
  wantedRows.forEach((row => {
    square.push(row.slice(left, left + size))
  }))
  return square;
}