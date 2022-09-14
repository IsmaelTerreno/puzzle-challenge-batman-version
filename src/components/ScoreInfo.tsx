import * as React from 'react';
import { Avatar, Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import 'animate.css';
import starIcon from '../assets/star.jpg';
import { LevelProgress } from './LevelProgress';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginBottom: 50,
    padding: 20
  }
});

type Props = { completedGames: number; levelNumber: number; results: ResultGame[] };

export const ScoreInfo: React.FC<Props> = ({ completedGames, results, levelNumber }) => {
  const classes = useStyles();
  const getEntranceAnimation = () => {
    return ' animate__animated animate__bounceIn';
  };
  const wins = results.filter(r => r.winner === true).length;
  const loses = results.filter(r => r.winner === false).length;
  const getStars = (amount: number) => {
    let starts = [];
    for (let i = 0; i < amount; i++) {
      starts.push(<Avatar src={starIcon} key={'completed-' + i} />);
    }
    return starts;
  };
  const hasCompletedGames = completedGames > 0;
  return (
    <Grid container direction="column" alignItems="center" justifyContent="flex-end" spacing={2}>
      <Grid item>
        <Card className={classes.root + ' ' + getEntranceAnimation()}>
          <CardContent>
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={8}>
              <Grid item>
                <Typography variant="h3">Score</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Wins: {wins}</Typography>
                <Typography variant="h6">Loses: {loses}</Typography>
              </Grid>
              <Grid item>
                <LevelProgress currenLevel={levelNumber} />
              </Grid>
              <Grid item>
                {hasCompletedGames && <Typography variant="h6">Completed games</Typography>}
                {hasCompletedGames && getStars(completedGames)}
              </Grid>
              <Grid item>
                {hasCompletedGames && completedGames > 0 && (
                  <Button variant="contained" color="primary" href="https://www.youtube.com/watch?v=v2YlMWr-zO0" target="_blank">
                    CLICK BECAUSE I'M BATMAN!
                  </Button>
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
