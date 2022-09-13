import { typedAction } from '../helpers';

export enum KEYBOARD_SUPPORT {
  left = 37,
  up = 38,
  right = 39,
  down = 40
}

export enum POSITION_ROW_TYPE {
  obstacle = 1,
  freeSpace = 0,
  finishPosition = 2,
  currentPosition = 3
}

export enum LEVEL_ACTIONS {
  MOVE_PLAYER_LOCATION = 'level/MOVE_PLAYER_LOCATION',
  SET_PLAYER_LOCATION = 'level/SET_PLAYER_LOCATION',
  DECREMENT_PLAYER_LEFT_MOVEMENTS = 'level/DECREMENT_PLAYER_LEFT_MOVEMENTS'
}

export const movePosition = (position: CoordinatePosition) => {
  return typedAction(LEVEL_ACTIONS.MOVE_PLAYER_LOCATION, position);
};

export const setPosition = (position: CoordinatePosition) => {
  return typedAction(LEVEL_ACTIONS.SET_PLAYER_LOCATION, position);
};

export const decrementLeftMovements = () => {
  return typedAction(LEVEL_ACTIONS.DECREMENT_PLAYER_LEFT_MOVEMENTS, null);
};

type UserAction = ReturnType<typeof setPosition | typeof decrementLeftMovements | typeof movePosition>;

const initState: LevelStore = {
  rows: [
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace]
    },
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle]
    },
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle]
    },
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle]
    },
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace]
    }
  ],
  startLocation: {
    row: 0,
    column: 0
  },
  finishLocation: {
    row: 4,
    column: 4
  },
  currentLocation: {
    row: 0,
    column: 0
  },
  leftMovements: 10
};

export function levelReducer(state = initState, action: UserAction): LevelStore {
  switch (action.type) {
    case LEVEL_ACTIONS.SET_PLAYER_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
    case LEVEL_ACTIONS.DECREMENT_PLAYER_LEFT_MOVEMENTS:
      return {
        ...state,
        leftMovements: state.leftMovements - 1
      };
    case LEVEL_ACTIONS.MOVE_PLAYER_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      };
    default:
      return state;
  }
}
