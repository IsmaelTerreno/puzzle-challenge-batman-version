type RowLevel = {
  columns: number[];
};

type CoordinatePosition = {
  row: number;
  column: number;
};

type ResultGame = {
  winner: boolean;
  leftMovements: number;
};

type LevelStore = {
  rows: RowLevel[];
  startLocation: CoordinatePosition;
  finishLocation: CoordinatePosition;
  currentLocation: CoordinatePosition;
  leftMovements: number;
};

type ScoreStore = {
  results: ResultGame[];
};

type GameStore = {
  message: string;
};
