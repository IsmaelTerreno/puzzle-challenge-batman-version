import * as React from 'react';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import 'animate.css';
import { LEVELS } from '../redux/reducers/level';

const useStyles = makeStyles({
  currentLevel: {
    textAlign: 'center'
  },
  boxLevel: {
    width: 190
  }
});
type PropsProgressLabel = {
  currenLevel: number;
};
export const LevelProgress: React.FC<PropsProgressLabel> = ({ currenLevel }) => {
  const classes = useStyles();
  const level = currenLevel + 1;
  const getProgress = (level: number) => {
    const levelLimit = LEVELS.length + 1;
    const difference = ((level + 1) * 100) / levelLimit;
    return Math.round(difference);
  };
  return (
    <div className={classes.boxLevel}>
      <Typography variant="h4" className={classes.currentLevel}>
        Level: {level}
      </Typography>
      <LinearProgress variant="determinate" value={getProgress(currenLevel)} />
    </div>
  );
};
