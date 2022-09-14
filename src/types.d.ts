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

type Level = {
  matrix: RowLevel[];
  startLocation: CoordinatePosition;
  finishLocation: CoordinatePosition;
  currentLocation: CoordinatePosition;
  leftMovements: number;
};

type LevelStore = {
  levels: Level[];
  currentLevelNumber: number;
  level: Level;
};

type ScoreStore = {
  results: ResultGame[];
};

type GameStore = {
  message: string;
  completedGames: number;
};
