import { typedAction } from '../helpers';

export enum SCORE_ACTIONS {
  ADD_PLAYER_RESULTS = 'score/ADD_PLAYER_RESULTS'
}

export const addResultGame = (result: ResultGame) => {
  return typedAction(SCORE_ACTIONS.ADD_PLAYER_RESULTS, result);
};

type ScoreAction = ReturnType<typeof addResultGame>;

const startState: ScoreStore = {
  results: []
};

const initState: ScoreStore = { ...startState };

export function scoreReducer(state = initState, action: ScoreAction): ScoreStore {
  switch (action.type) {
    case SCORE_ACTIONS.ADD_PLAYER_RESULTS:
      return {
        ...state,
        results: [...state.results, action.payload]
      };
    default:
      return state;
  }
}
