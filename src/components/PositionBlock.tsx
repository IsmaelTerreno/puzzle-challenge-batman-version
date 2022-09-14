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
  }
});

type PositionConfigInfo = {
  classCss: string;
  title: string;
};

type Props = { positionType: POSITION_ROW_TYPE; isCurrentPosition: boolean; isWinner: boolean; isLoser: boolean };

export const PositionBlock: React.FC<Props> = ({ positionType, isCurrentPosition, isWinner, isLoser }) => {
  const classes = useStyles();
  const getStyleAndTitlePosition = (position: POSITION_ROW_TYPE): PositionConfigInfo => {
    switch (position) {
      case POSITION_ROW_TYPE.currentPosition:
        return {
          classCss: 'free-space-grass',
          title: 'Free space path'
        };
      case POSITION_ROW_TYPE.finishPosition:
        return {
          classCss: 'free-space-grass',
          title: 'Finish position target'
        };
      case POSITION_ROW_TYPE.freeSpace:
        return {
          classCss: 'free-space-grass',
          title: 'Free space path'
        };
      case POSITION_ROW_TYPE.obstacle:
        return {
          classCss: 'obstacle-wall',
          title: 'Obstacle path'
        };
      case POSITION_ROW_TYPE.startPosition:
        return {
          classCss: 'star-position-castle',
          title: 'Castle in starting position'
        };
      default:
        return {
          classCss: 'free-space-grass',
          title: 'Free space path'
        };
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
  const positionInfo: PositionConfigInfo = getStyleAndTitlePosition(positionType);
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
      <Grid item>
        <Card
          title={positionInfo.title}
          className={
            classes.root +
            ' ' +
            positionInfo.classCss +
            (isWinner ? getWinnerAnimation() : isLoser ? getLoserAnimation() : isCurrentPosition ? getMoveAnimation() : getEntranceAnimation())
          }
        >
          <CardContent>
            {isCurrentPosition && <div className="batman" title="Batman" />}
            {isCurrentPosition && isFinishPosition && <Avatar title="Diamond" src={diamond} />}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
