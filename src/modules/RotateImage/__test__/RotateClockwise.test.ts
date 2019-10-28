import rotateClockwise from '../RotateClockwise';

describe('Test rotation image clockwise', () => {
  test('Should throw error if the number of different rows and columns', () => {
    const grid = [[1, 2], [3, 4], [5, 6]];
    const numOfRotates = 1;
    const actual = () => {
      rotateClockwise(grid, numOfRotates);
    };
    expect(actual).toThrowError(
      'Not accept the number of different rows and columns',
    );
  });
  test('Should throw error if number turn negative', () => {
    const grid = [[1, 2], [3, 4]];
    const numOfRotates = -1;
    const actual = () => {
      rotateClockwise(grid, numOfRotates);
    };
    expect(actual).toThrowError('Not accept negative number of rotations');
  });

  test('Should return original matrix when 0 time or multiple of 4 rotates', () => {
    const grid = [[1, 2], [3, 4]];
    const expected = [[1, 2], [3, 4]];
    let numOfRotates = 0;
    let actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 4;
    actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
  });

  test('Should rotate photos with even number of columns by 1 times', () => {
    const grid = [[1, 2], [3, 4]];
    const expected = [[3, 1], [4, 2]];
    let numOfRotates = 1;
    let actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 5;
    actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
  });

  test('Should rotate photos with even number of columns by 2 times', () => {
    const grid = [[1, 2], [3, 4]];
    const expected = [[4, 3], [2, 1]];
    let numOfRotates = 2;
    let actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 6;
    actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
  });

  test('Should rotate photos with even number of columns by 3 times', () => {
    const grid = [[1, 2], [3, 4]];
    const expected = [[2, 4], [1, 3]];
    let numOfRotates = 3;
    let actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 11;
    actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
  });

  test('Should rotate photos with odd number of columns by 1 times', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[7, 4, 1], [8, 5, 2], [9, 6, 3]];
    let numOfRotates = 1;
    let actual = rotateClockwise([...grid], numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 5;
    actual = rotateClockwise([...grid], numOfRotates);
    expect(actual).toEqual(expected);
  });

  test('Should rotate photos with odd number of columns by 2 times', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[9, 8, 7], [6, 5, 4], [3, 2, 1]];
    let numOfRotates = 2;
    let actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 10;
    actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
  });

  test('Should rotate photos with odd number of columns by 3 times', () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    const expected = [[3, 6, 9], [2, 5, 8], [1, 4, 7]];
    let numOfRotates = 3;
    let actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
    numOfRotates = 7;
    actual = rotateClockwise(grid, numOfRotates);
    expect(actual).toEqual(expected);
  });
});
