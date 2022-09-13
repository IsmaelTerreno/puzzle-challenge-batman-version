import * as React from 'react';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { PositionBlock } from './PositionBlock';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';
import { ScoreInfo } from './ScoreInfo';

const useStyles = makeStyles({
  table: {
    overflow: 'hidden',
    padding: 20
  }
});

const mapStateToProps = (state: RootState) => ({
  rows: state.level.rows,
  currentLocation: state.level.currentLocation,
  startLocation: state.level.startLocation,
  finishLocation: state.level.finishLocation,
  results: state.level.results
});

type Props = ReturnType<typeof mapStateToProps>;

const LevelDrawer: React.FC<Props> = ({ rows, currentLocation, startLocation, finishLocation, results }) => {
  const classes = useStyles();
  return (
    <div>
      <ScoreInfo results={results} />
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label="game table">
          <TableBody>
            {rows.map((row, idx) => {
              return (
                <TableRow key={'row-area-' + idx}>
                  {row.columns.map((column, idx2) => {
                    let positionType = column;
                    const isCurrentPosition = currentLocation.row === idx && currentLocation.column === idx2;
                    const isFinishPosition = finishLocation.row === idx && finishLocation.column === idx2;
                    if (isCurrentPosition) {
                      positionType = POSITION_ROW_TYPE.currentPosition;
                    }
                    if (isFinishPosition) {
                      positionType = POSITION_ROW_TYPE.finishPosition;
                    }
                    return (
                      <TableCell key={'column-area-' + idx2}>
                        <PositionBlock positionType={positionType} />
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
