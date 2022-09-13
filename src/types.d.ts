type RowLevel = {
  columns: number[];
};

type CoordinatePosition = {
  row: number;
  column: number;
};

type LevelStore = {
  rows: RowLevel[];
  startLocation: CoordinatePosition;
  finishLocation: CoordinatePosition;
  currentLocation: CoordinatePosition;
  leftMovements: number;
};
