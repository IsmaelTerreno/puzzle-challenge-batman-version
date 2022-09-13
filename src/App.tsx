import React from 'react';
import { LabyrinthContainer } from './components/Labyrinth';
import { Container } from '@material-ui/core';

const App = () => (
  <Container maxWidth="md">
    <LabyrinthContainer />
  </Container>
);

export default App;
