import * as React from 'react';

export const isSupportedMovement = (keyboardEvent: KeyboardEvent) => {
  enum KEYBOARD_SUPPORT {
    left = 37,
    up = 38,
    right = 39,
    down = 40
  }
  return Object.values(KEYBOARD_SUPPORT).includes(keyboardEvent.keyCode);
};

export const useMovements = (handleKeyDown: (event: KeyboardEvent) => void) => {
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });
};
