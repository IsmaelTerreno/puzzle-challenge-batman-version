import * as React from 'react';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';
import { Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import 'animate.css';

const useStyles = makeStyles({
  root: {
    minHeight: 80,
    minWidth: 80
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
  },
  circlePosition: {
    borderRadius: '50%',
    border: '1px solid #000000',
    background: '#fbff01',
    padding: 23,
    position: 'absolute'
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
        return classes.finishPosition;
      case POSITION_ROW_TYPE.freeSpace:
        return classes.freeSpace;
      case POSITION_ROW_TYPE.obstacle:
        return classes.obstacle;
      default:
        return '';
    }
  };
  const isCurrentPosition = positionType === POSITION_ROW_TYPE.currentPosition;
  const getEntranceAnimation = () => {
    return ' animate__animated animate__flipInY';
  };
  const getMoveAnimation = () => {
    return ' animate__animated animate__bounce';
  };
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <Card className={classes.root + ' ' + getStylePosition(positionType) + (isCurrentPosition ? getMoveAnimation() : getEntranceAnimation())}>
          <CardContent>{isCurrentPosition && <div className={classes.circlePosition} />}</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
