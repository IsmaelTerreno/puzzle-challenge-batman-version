import { combineReducers } from 'redux';
import { levelReducer } from './level';

export const rootReducer = combineReducers({
  level: levelReducer
});

export type RootState = ReturnType<typeof rootReducer>;
