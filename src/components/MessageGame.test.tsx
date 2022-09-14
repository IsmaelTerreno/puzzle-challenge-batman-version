import React from 'react';
// @ts-ignore
import { render, screen } from '@testing-library/react';
import { MessageGame } from './MessageGame';
import { GAME_ACTIONS } from '../redux/reducers/game';

describe('MessageGame', () => {
  beforeEach(() => {});
  const setMessageLevelMock = (
    message: string
  ): {
    type: GAME_ACTIONS.SET_LEVEL_MESSAGE;
    payload: string;
  } => {
    return {
      type: GAME_ACTIONS.SET_LEVEL_MESSAGE,
      payload: message
    };
  };

  it('should show the passed message', () => {
    render(<MessageGame message={'Welcome to the game'} setMessageLevel={setMessageLevelMock} />);
    const contentMessage = screen.getByText(/Welcome to the game/i);
    expect(contentMessage).toBeInTheDocument();
  });

  it('should show the correct message title ', () => {
    render(<MessageGame message={'Welcome to the game'} setMessageLevel={setMessageLevelMock} />);
    const dialogTitleMessage = screen.getByText(/Labyrinth - Batman version/i);
    expect(dialogTitleMessage).toBeInTheDocument();
  });

  it('should have the continue button', () => {
    render(<MessageGame message={'Welcome to the game'} setMessageLevel={setMessageLevelMock} />);
    const continueButton = screen.getByRole('button');
    expect(continueButton).toHaveTextContent(/Continue/i);
    expect(continueButton).toBeInTheDocument();
  });
});
