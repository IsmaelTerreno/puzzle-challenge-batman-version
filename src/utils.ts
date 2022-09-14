import { KEYBOARD_SUPPORT, LEVELS, POSITION_ROW_TYPE } from './redux/reducers/level';

export const isSupportedMovement = (keyboardEvent: KeyboardEvent) => {
  return Object.values(KEYBOARD_SUPPORT).includes(keyboardEvent.keyCode);
};

export const getNewPositionMovement = (keyboardEvent: KeyboardEvent, currentLocation: CoordinatePosition, matrix: RowLevel[]) => {
  let nextPosition: CoordinatePosition;
  const limitRows = matrix.length - 1;
  const limitCols = matrix[0].columns.length - 1;
  const isObstacle = (nextLocation: CoordinatePosition) => {
    const levelLocation = matrix[nextLocation.row].columns[nextLocation.column];
    return levelLocation === POSITION_ROW_TYPE.obstacle;
  };
  const isOnColumnLevelLimits = (nextLocation: CoordinatePosition) => {
    return nextLocation.column > -1 && nextLocation.column <= limitCols;
  };
  const isOnRowLevelLimits = (nextLocation: CoordinatePosition) => {
    return nextLocation.row > -1 && nextLocation.row <= limitRows;
  };
  const isValidColumnMovement = (nextLocation: CoordinatePosition) => {
    return isOnColumnLevelLimits(nextLocation) && !isObstacle(nextLocation);
  };
  const isValidRowMovement = (nextLocation: CoordinatePosition) => {
    return isOnRowLevelLimits(nextLocation) && !isObstacle(nextLocation);
  };
  switch (keyboardEvent.keyCode) {
    case KEYBOARD_SUPPORT.right:
      const nextRightLocation: CoordinatePosition = {
        row: currentLocation.row,
        column: currentLocation.column + 1
      };
      nextPosition = isValidColumnMovement(nextRightLocation) ? nextRightLocation : currentLocation;
      break;
    case KEYBOARD_SUPPORT.left:
      const nextLeftLocation: CoordinatePosition = {
        row: currentLocation.row,
        column: currentLocation.column - 1
      };
      nextPosition = isValidColumnMovement(nextLeftLocation) ? nextLeftLocation : currentLocation;
      break;
    case KEYBOARD_SUPPORT.down:
      const nextDownLocation: CoordinatePosition = {
        row: currentLocation.row + 1,
        column: currentLocation.column
      };
      nextPosition = isValidRowMovement(nextDownLocation) ? nextDownLocation : currentLocation;
      break;
    case KEYBOARD_SUPPORT.up:
      const nextUpLocation: CoordinatePosition = {
        row: currentLocation.row - 1,
        column: currentLocation.column
      };
      nextPosition = isValidRowMovement(nextUpLocation) ? nextUpLocation : currentLocation;
      break;
    default:
      nextPosition = currentLocation;
  }
  return nextPosition;
};

export const hasNextLevel = (levelNumber: number) => {
  const limitLevels = LEVELS.length - 1;
  return levelNumber + 1 <= limitLevels;
};

export const getNextLevelNumber = (levelNumber: number) => {
  return hasNextLevel(levelNumber) ? levelNumber + 1 : 0;
};
