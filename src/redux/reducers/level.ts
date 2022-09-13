import { typedAction } from '../helpers';

enum POSITION_ROW_TYPE {
  obstacle = 1,
  freeSpace = 0
}

enum LEVEL_ACTIONS {
  SET_PLAYER_LOCATION = 'level/SET_PLAYER_LOCATION',
  SET_PLAYER_LEFT_MOVEMENTS = 'level/SET_PLAYER_LEFT_MOVEMENTS'
}

export const setPosition = (position: CoordinatePosition) => {
  return typedAction(LEVEL_ACTIONS.SET_PLAYER_LOCATION, position);
};

export const setLeftMovements = (leftMovements: number) => {
  return typedAction(LEVEL_ACTIONS.SET_PLAYER_LEFT_MOVEMENTS, leftMovements);
};

type UserAction = ReturnType<typeof setPosition | typeof setLeftMovements>;

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
    case LEVEL_ACTIONS.SET_PLAYER_LEFT_MOVEMENTS:
      return {
        ...state,
        leftMovements: action.payload
      };
    default:
      return state;
  }
}
