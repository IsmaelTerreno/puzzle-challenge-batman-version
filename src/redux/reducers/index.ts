import { combineReducers } from 'redux';
import { levelReducer } from './level';
import { scoreReducer } from './score';
import { gameReducer } from './game';

export const rootReducer = combineReducers({
  level: levelReducer,
  score: scoreReducer,
  game: gameReducer
});

export type RootState = ReturnType<typeof rootReducer>;
