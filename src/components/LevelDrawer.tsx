import * as React from 'react';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { PositionBlock } from './PositionBlock';

const mapStateToProps = (state: RootState) => ({
  rows: state.level.rows,
  currentLocation: state.level.currentLocation,
  startLocation: state.level.startLocation,
  finishLocation: state.level.finishLocation
});

type Props = ReturnType<typeof mapStateToProps>;

const LevelDrawer: React.FC<Props> = ({ rows, currentLocation, startLocation, finishLocation }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="game table">
          <TableBody>
            {rows.map((row, idx) => {
              return (
                <TableRow key={'row-area-' + idx}>
                  {row.columns.map((column, idx2) => {
                    return (
                      <TableCell key={'column-area-' + idx2}>
                        <PositionBlock positionType={column} />
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
