import * as React from 'react';
import { isSupportedMovement, useMovements } from '../utils';

const handleKeyDown = (event: KeyboardEvent) => {
  const actionMove: boolean = isSupportedMovement(event);

  console.log(actionMove);
};

const Solution = () => {
  useMovements(handleKeyDown);
  return <div>Ok let's build this game...</div>;
};

export default Solution;
