import * as React from 'react';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';
import { Avatar, Card, CardContent, Grid, makeStyles } from '@material-ui/core';
import 'animate.css';
import '../assets/batman.scss';
import '../assets/terrain.scss';
import diamond from '../assets/diamond.jpg';

const useStyles = makeStyles({
  root: {
    minHeight: 80,
    minWidth: 80
  },
  freeSpace: {},
  obstacle: {},
  currentPosition: {
    background: '#ffffff'
  },
  startPosition: {
    background: '#fbff01'
  },
  finishPosition: {},
  circlePosition: {
    borderRadius: '50%',
    border: '1px solid #000000',
    background: '#ffffff',
    padding: 23,
    position: 'absolute'
  }
});

type Props = { positionType: POSITION_ROW_TYPE; isCurrentPosition: boolean; isWinner: boolean; isLoser: boolean };

export const PositionBlock: React.FC<Props> = ({ positionType, isCurrentPosition, isWinner, isLoser }) => {
  const classes = useStyles();
  const getStylePosition = (position: POSITION_ROW_TYPE) => {
    switch (position) {
      case POSITION_ROW_TYPE.currentPosition:
        return classes.currentPosition;
      case POSITION_ROW_TYPE.finishPosition:
        return classes.finishPosition + ' free-space-grass';
      case POSITION_ROW_TYPE.freeSpace:
        return classes.freeSpace + ' free-space-grass';
      case POSITION_ROW_TYPE.obstacle:
        return classes.obstacle + ' obstacle-wall';
      case POSITION_ROW_TYPE.startPosition:
        return classes.startPosition;
      default:
        return '';
    }
  };
  const getEntranceAnimation = () => {
    return ' animate__animated animate__flipInY';
  };
  const getMoveAnimation = () => {
    return ' animate__animated animate__bounce';
  };
  const getWinnerAnimation = () => {
    return ' animate__animated animate__flip';
  };
  const getLoserAnimation = () => {
    return ' animate__animated animate__shakeX';
  };
  const isFinishPosition = positionType === POSITION_ROW_TYPE.finishPosition;
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <Card
          className={
            classes.root +
            ' ' +
            getStylePosition(positionType) +
            (isWinner ? getWinnerAnimation() : isLoser ? getLoserAnimation() : isCurrentPosition ? getMoveAnimation() : getEntranceAnimation())
          }
        >
          <CardContent>
            {isCurrentPosition && <div className="batman" />}
            {isCurrentPosition && isFinishPosition && <Avatar src={diamond} />}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
