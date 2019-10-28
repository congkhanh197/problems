/**
 * Rotate the image by 90 degrees clockwise.
 * @param grid Image array in n * n.
 * @param numOfRotates Number of rotations.
 * @returns Image array n * n has been rotated.
 */
const rotateClockwise = (
  grid: number[][],
  numOfRotates: number,
): number[][] => {
  const numOfRows = grid.length;
  if (numOfRows !== grid[0].length)
    throw new Error('Not accept the number of different rows and columns');
  if (numOfRotates < 0)
    throw new Error('Not accept negative number of rotations');
  const rotateTimes = numOfRotates % 4;
  const result = JSON.parse(JSON.stringify(grid));
  const numOfCycles = Math.floor(numOfRows / 2);
  for (let cycle = 0; cycle < numOfCycles; cycle++) {
    // The offset from the current coordinates to the next coordinates.
    const offset = numOfRows - cycle - 1;
    // Loop through change pixel in a cycle.
    for (let index = 0; index < offset - cycle; index++) {
      switch (rotateTimes) {
        case 0:
          break;
        case 1:
          result[cycle][cycle + index] = grid[offset - index][cycle];
          result[offset - index][cycle] = grid[offset][offset - index];
          result[offset][offset - index] = grid[cycle + index][offset];
          result[cycle + index][offset] = grid[cycle][cycle + index];
          break;
        case 2:
          result[cycle][cycle + index] = grid[offset][offset - index];
          result[offset][offset - index] = grid[cycle][cycle + index];
          result[cycle + index][offset] = grid[offset - index][cycle];
          result[offset - index][cycle] = grid[cycle + index][offset];
          break;
        case 3:
          result[cycle][cycle + index] = grid[cycle + index][offset];
          result[cycle + index][offset] = grid[offset][offset - index];
          result[offset][offset - index] = grid[offset - index][cycle];
          result[offset - index][cycle] = grid[cycle][cycle + index];
          break;
      }
    }
  }
  return result;
};

export default rotateClockwise;
