import * as React from 'react';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { LevelDrawerContainer } from './LevelDrawer';
import { Grid, Typography } from '@material-ui/core';
import { MessageGameContainer } from './MessageGame';

const mapStateToProps = (state: RootState) => ({
  leftMovements: state.level.leftMovements
});

type Props = ReturnType<typeof mapStateToProps>;

const Labyrinth: React.FC<Props> = ({ leftMovements }) => {
  return (
    <>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <LevelDrawerContainer />
        </Grid>
        <Grid item>
          <Typography variant="h5">Moves left: {leftMovements}</Typography>
        </Grid>
      </Grid>
      <MessageGameContainer />
    </>
  );
};

export const LabyrinthContainer = connect(mapStateToProps, null)(Labyrinth);
