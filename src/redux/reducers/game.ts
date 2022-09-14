import { typedAction } from '../helpers';

export enum GAME_ACTIONS {
  SET_LEVEL_MESSAGE = 'game/SET_LEVEL_MESSAGE',
  ADD_COMPLETED_GAME = 'game/ADD_COMPLETED_GAME'
}

export const setMessageLevel = (message: string) => {
  return typedAction(GAME_ACTIONS.SET_LEVEL_MESSAGE, message);
};

export const addCompletedGame = () => {
  return typedAction(GAME_ACTIONS.ADD_COMPLETED_GAME, null);
};

type GameAction = ReturnType<typeof setMessageLevel | typeof addCompletedGame>;

const startState: GameStore = {
  completedGames: 0,
  message:
    'Hey welcome to the party!, play the game using the arrows of your keyboard. Your objective is to move batman from the initial position and find the diamond in the cave before you run out of moves. Good luck batman!!'
};

const initState: GameStore = { ...startState };

export function gameReducer(state = initState, action: GameAction): GameStore {
  switch (action.type) {
    case GAME_ACTIONS.SET_LEVEL_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case GAME_ACTIONS.ADD_COMPLETED_GAME:
      return {
        ...state,
        completedGames: state.completedGames + 1
      };
    default:
      return state;
  }
}
