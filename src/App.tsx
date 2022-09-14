import React from 'react';
import { Labyrinth } from './components/Labyrinth';
import { Container } from '@material-ui/core';

const App = () => (
  <Container maxWidth="md">
    <Labyrinth />
  </Container>
);

export default App;
