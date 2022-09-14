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
  currentPosition = 3,
  startPosition = 4
}

export enum LEVEL_ACTIONS {
  RESTART_TO_FIRST_LEVEL = 'level/RESTART_TO_FIRST_LEVEL',
  GO_TO_LEVEL = 'level/GO_TO_LEVEL',
  MOVE_PLAYER_LOCATION = 'level/MOVE_PLAYER_LOCATION',
  SET_PLAYER_LOCATION = 'level/SET_PLAYER_LOCATION',
  DECREMENT_PLAYER_LEFT_MOVEMENTS = 'level/DECREMENT_PLAYER_LEFT_MOVEMENTS'
}

export const goToLevel = (levelNumber: number) => {
  return typedAction(LEVEL_ACTIONS.GO_TO_LEVEL, levelNumber);
};

export const restartToFirstLevel = () => {
  return typedAction(LEVEL_ACTIONS.RESTART_TO_FIRST_LEVEL, null);
};

export const movePosition = (position: CoordinatePosition) => {
  return typedAction(LEVEL_ACTIONS.MOVE_PLAYER_LOCATION, position);
};

export const setPosition = (position: CoordinatePosition) => {
  return typedAction(LEVEL_ACTIONS.SET_PLAYER_LOCATION, position);
};

export const decrementLeftMovements = () => {
  return typedAction(LEVEL_ACTIONS.DECREMENT_PLAYER_LEFT_MOVEMENTS, null);
};

type UserAction = ReturnType<typeof setPosition | typeof decrementLeftMovements | typeof movePosition | typeof restartToFirstLevel | typeof goToLevel>;

export const LEVEL_1_CONFIG: Level = {
  matrix: [
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

export const LEVEL_2_CONFIG: Level = {
  matrix: [
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
    column: 4
  },
  finishLocation: {
    row: 3,
    column: 1
  },
  currentLocation: {
    row: 0,
    column: 4
  },
  leftMovements: 9
};

export const LEVEL_3_CONFIG: Level = {
  matrix: [
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace]
    },
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace]
    },
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle]
    },
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle]
    },
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle]
    }
  ],
  startLocation: {
    row: 0,
    column: 4
  },
  finishLocation: {
    row: 2,
    column: 1
  },
  currentLocation: {
    row: 0,
    column: 4
  },
  leftMovements: 8
};

export const LEVEL_4_CONFIG: Level = {
  matrix: [
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace]
    },
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace]
    },
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle]
    },
    {
      columns: [POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace]
    },
    {
      columns: [POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.obstacle, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace, POSITION_ROW_TYPE.freeSpace]
    }
  ],
  startLocation: {
    row: 0,
    column: 4
  },
  finishLocation: {
    row: 0,
    column: 0
  },
  currentLocation: {
    row: 0,
    column: 4
  },
  leftMovements: 7
};

export const LEVELS = [LEVEL_1_CONFIG, LEVEL_2_CONFIG, LEVEL_3_CONFIG, LEVEL_4_CONFIG];

const startState: LevelStore = {
  levels: LEVELS,
  currentLevelNumber: 0,
  level: LEVELS[0]
};

const initState: LevelStore = { ...startState };

export function levelReducer(state = initState, action: UserAction): LevelStore {
  switch (action.type) {
    case LEVEL_ACTIONS.SET_PLAYER_LOCATION:
      return {
        ...state,
        level: {
          ...state.level,
          currentLocation: action.payload
        }
      };
    case LEVEL_ACTIONS.DECREMENT_PLAYER_LEFT_MOVEMENTS:
      return {
        ...state,
        level: {
          ...state.level,
          leftMovements: state.level.leftMovements - 1
        }
      };
    case LEVEL_ACTIONS.MOVE_PLAYER_LOCATION:
      return {
        ...state,
        level: {
          ...state.level,
          currentLocation: action.payload
        }
      };
    case LEVEL_ACTIONS.GO_TO_LEVEL:
      return {
        ...state,
        currentLevelNumber: action.payload,
        level: LEVELS[action.payload]
      };
    case LEVEL_ACTIONS.RESTART_TO_FIRST_LEVEL:
      return {
        ...startState
      };
    default:
      return state;
  }
}
