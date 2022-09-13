import * as React from 'react';
import { isSupportedMovement } from '../utils';
import { RootState } from '../redux/reducers';
import { decrementLeftMovements } from '../redux/reducers/level';
import { connect } from 'react-redux';
import { LevelDrawerContainer } from './LevelDrawer';
import { Grid, Typography } from '@material-ui/core';

const mapStateToProps = (state: RootState) => ({
  leftMovements: state.level.leftMovements
});

const mapDispatchToProps = { decrementLeftMovements };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const handleKeyDown = (event: KeyboardEvent, decrementLeftMovements: () => void) => {
  if (isSupportedMovement(event)) {
    decrementLeftMovements();
    console.log('Moved.');
  }
};

const Labyrinth: React.FC<Props> = ({ decrementLeftMovements, leftMovements }) => {
  React.useEffect(() => {
    window.addEventListener('keydown', event => {
      handleKeyDown(event, decrementLeftMovements);
    });
  }, [decrementLeftMovements]);
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <LevelDrawerContainer />
      </Grid>
      <Grid item>
        <Typography>Moves left: {leftMovements}</Typography>
      </Grid>
    </Grid>
  );
};

export const LabyrinthContainer = connect(mapStateToProps, mapDispatchToProps)(Labyrinth);
