import * as React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import 'animate.css';

const useStyles = makeStyles({
  root: {
    marginTop: 25,
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
            <Typography variant="h3">Score</Typography>
            <Typography variant="h6">Wins: {wins}</Typography>
            <Typography variant="h6">Loses: {loses}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
