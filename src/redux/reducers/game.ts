import { typedAction } from '../helpers';

export enum GAME_ACTIONS {
  SET_LEVEL_MESSAGE = 'game/SET_LEVEL_MESSAGE'
}

export const setMessageLevel = (message: string) => {
  return typedAction(GAME_ACTIONS.SET_LEVEL_MESSAGE, message);
};

type GameAction = ReturnType<typeof setMessageLevel>;

const startState: GameStore = {
  message:
    'Hey welcome to the party!, play the game using the arrows of your keyboard. Your objective is to move batman from the initial position and find the diamond in the cave before you run out of moves. Good luck batman!!'
};

const initState: GameStore = { ...startState };

export function gameReducer(state = initState, action: GameAction): GameStore {
  switch (action.type) {
    case GAME_ACTIONS.SET_LEVEL_MESSAGE:
      return {
        ...startState,
        message: action.payload
      };
    default:
      return state;
  }
}
