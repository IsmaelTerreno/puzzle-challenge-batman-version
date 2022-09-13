import * as React from 'react';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: 50,
    maxWidth: 60
  },
  freeSpace: {
    background: '#ffffff'
  },
  obstacle: {
    background: '#d3d3d3'
  },
  currentPosition: {
    background: '#fbff01'
  },
  finishPosition: {
    background: '#90ed90'
  }
});

type Props = { positionType: POSITION_ROW_TYPE };

export const PositionBlock: React.FC<Props> = ({ positionType }) => {
  const classes = useStyles();
  const getStylePosition = (position: POSITION_ROW_TYPE) => {
    switch (position) {
      case POSITION_ROW_TYPE.currentPosition:
        return classes.currentPosition;
      case POSITION_ROW_TYPE.finishPosition:
        return classes.currentPosition;
      case POSITION_ROW_TYPE.freeSpace:
        return classes.freeSpace;
      case POSITION_ROW_TYPE.obstacle:
        return classes.obstacle;
      default:
        return '';
    }
  };
  return (
    <Card className={classes.root + ' ' + getStylePosition(positionType)}>
      <CardContent>{positionType === POSITION_ROW_TYPE.currentPosition ? 'Circle' : ''}</CardContent>
    </Card>
  );
};
