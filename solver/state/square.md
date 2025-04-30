Need to define a square:

A square is an individual cell in Sudoku. A sudoku grid is made of a 9x9
grid of squares. Each gird is broken into 9 3x3 houses. Each house, row
column have 9 squares, each with a unique value from 1 to 9.

Each square has the following properties:
column - What column it is in (alternatively, x coordinate) from 0 to 8.
row -  What row it is in (alternatively, y coordinate) from 0 to 8.
house - What house it is in. This could be calculated from row and column data, but since it's not going to change let's just set it. The houses are numbered starting from the top left going to the right then down from 0 to 8.
value - The correct value for this square
possibleValues - Array of possible values
crossedValues - Array of possible values that are incorrect. This could just be removed from possibleValues, but having a visual indicator to show that a number isn't being considered is a plus
seededValue: If true, this number is part of the starting puzzle not filled in by user

Functions:
getValue: returns value if it exist, otherwise returns possibleValues
setValue
setPossibleValues
getVisibleSquares: returns squares in the same row, column and house (somehow...)
