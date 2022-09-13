import * as React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import 'animate.css';

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    marginBottom: 50,
    padding: 20
  }
});

type Props = { results: ResultGame[] };

export const ScoreInfo: React.FC<Props> = ({ results }) => {
  const classes = useStyles();
  const getEntranceAnimation = () => {
    return ' animate__animated animate__bounceIn';
  };
  const wins = results.filter(r => r.winner === true).length;
  const loses = results.filter(r => r.winner === false).length;
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
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
                <Typography variant="h6">Level: {1}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
