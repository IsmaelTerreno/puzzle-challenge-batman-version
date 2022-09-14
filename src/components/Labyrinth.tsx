import * as React from 'react';
import { LevelDrawerContainer } from './LevelDrawer';
import { MessageGameContainer } from './MessageGame';

export const Labyrinth: React.FC = () => {
  return (
    <>
      <LevelDrawerContainer />
      <MessageGameContainer />
    </>
  );
};
