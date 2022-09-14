import * as React from 'react';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { LevelDrawerContainer } from './LevelDrawer';
import { MessageGameContainer } from './MessageGame';

const mapStateToProps = (state: RootState) => ({
  leftMovements: state.level.leftMovements
});

type Props = ReturnType<typeof mapStateToProps>;

const Labyrinth: React.FC<Props> = ({ leftMovements }) => {
  return (
    <>
      <LevelDrawerContainer />
      <MessageGameContainer />
    </>
  );
};

export const LabyrinthContainer = connect(mapStateToProps, null)(Labyrinth);
