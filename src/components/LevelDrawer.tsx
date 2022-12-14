import * as React from 'react';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@material-ui/core';
import { PositionBlock } from './PositionBlock';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';
import { ScoreInfo } from './ScoreInfo';

const useStyles = makeStyles({
  table: {
    overflow: 'hidden',
    padding: 20,
    backgroundColor: '#160c32'
  },
  movesLeftSection: {
    background: '#ffffff',
    border: 'solid 3px #000000',
    marginBottom: 10
  },
  tableCell: {
    border: 'none'
  }
});

const mapStateToProps = (state: RootState) => ({
  matrix: state.level.level.matrix,
  currentLocation: state.level.level.currentLocation,
  startLocation: state.level.level.startLocation,
  finishLocation: state.level.level.finishLocation,
  results: state.score.results,
  leftMovements: state.level.level.leftMovements,
  currentLevelNumber: state.level.currentLevelNumber,
  completedGames: state.game.completedGames
});

type Props = ReturnType<typeof mapStateToProps>;

const LevelDrawer: React.FC<Props> = ({
  completedGames,
  currentLevelNumber,
  leftMovements,
  matrix,
  currentLocation,
  startLocation,
  finishLocation,
  results
}) => {
  const classes = useStyles();
  return (
    <div>
      <ScoreInfo completedGames={completedGames} levelNumber={currentLevelNumber} results={results} />
      <Grid container direction="row" alignItems="center" justifyContent="center" spacing={2}>
        <Grid className={classes.movesLeftSection} item>
          <Typography variant="h5">Moves left: {leftMovements < 0 ? 0 : leftMovements}</Typography>
        </Grid>
      </Grid>
      <TableContainer className={classes.table}>
        <Table aria-label="game table">
          <TableBody>
            {matrix.map((row, idx) => {
              return (
                <TableRow key={'row-area-' + idx}>
                  {row.columns.map((column, idx2) => {
                    let positionType = column;
                    const isCurrentPosition = currentLocation.row === idx && currentLocation.column === idx2;
                    const isFinishPosition = finishLocation.row === idx && finishLocation.column === idx2;
                    const isStartPosition = startLocation.row === idx && startLocation.column === idx2;
                    const isWinnerPlayer = finishLocation.row === currentLocation.row && finishLocation.column === currentLocation.column;
                    const isLoserPlayer = leftMovements < 1;
                    if (isCurrentPosition) {
                      positionType = POSITION_ROW_TYPE.currentPosition;
                    }
                    if (isFinishPosition) {
                      positionType = POSITION_ROW_TYPE.finishPosition;
                    }
                    if (isStartPosition) {
                      positionType = POSITION_ROW_TYPE.startPosition;
                    }
                    return (
                      <TableCell className={classes.tableCell} key={'column-area-' + idx2}>
                        <PositionBlock positionType={positionType} isCurrentPosition={isCurrentPosition} isWinner={isWinnerPlayer} isLoser={isLoserPlayer} />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const LevelDrawerContainer = connect(mapStateToProps, null)(LevelDrawer);
