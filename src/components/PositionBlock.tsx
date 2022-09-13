import * as React from 'react';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minHeight: 50
  },
  freeSpace: {
    background: '#ffffff'
  },
  obstacle: {
    background: '#d3d3d3'
  },
  currentPosition: {
    marginBottom: '#fbff01'
  },
  finishPosition: {
    marginBottom: '#90ed90'
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
  return <Card className={classes.root + ' ' + getStylePosition(positionType)}></Card>;
};
