import { KEYBOARD_SUPPORT, POSITION_ROW_TYPE } from './redux/reducers/level';

export const isSupportedMovement = (keyboardEvent: KeyboardEvent) => {
  return Object.values(KEYBOARD_SUPPORT).includes(keyboardEvent.keyCode);
};

export const getNewPositionMovement = (keyboardEvent: KeyboardEvent, currentLocation: CoordinatePosition, rows: RowLevel[]) => {
  let nextPosition: CoordinatePosition;
  //const limitRows = rows.length - 1;
  const limitCols = rows[0].columns.length - 1;
  const isObstacle = (nextLocation: CoordinatePosition) => {
    const levelLocation = rows[nextLocation.row].columns[nextLocation.column];
    return levelLocation === POSITION_ROW_TYPE.obstacle;
  };
  const isOnColumnLevelLimits = (nextLocation: CoordinatePosition) => {
    return nextLocation.column > limitCols;
  };
  /*const isOnRowLevelLimits = (nextLocation: CoordinatePosition) => {
    return nextLocation.row >= limitRows;
  };*/

  switch (keyboardEvent.keyCode) {
    case KEYBOARD_SUPPORT.right:
      const nextRightLocation: CoordinatePosition = {
        row: currentLocation.row,
        column: currentLocation.column + 1
      };
      if (isOnColumnLevelLimits(nextRightLocation) || isObstacle(nextRightLocation)) {
        nextPosition = currentLocation;
      } else {
        nextPosition = nextRightLocation;
      }
      break;
    default:
      nextPosition = currentLocation;
  }
  return nextPosition;
};
