import React from 'react';
// @ts-ignore
import { render, screen } from '@testing-library/react';
import { ScoreInfo } from './ScoreInfo';

describe('ScoreInfo', () => {
  beforeEach(() => {});
  const emptyResultsMock: ResultGame[] = [];
  const resultsMock: ResultGame[] = [
    {
      winner: true,
      leftMovements: 2
    },
    {
      winner: true,
      leftMovements: 1
    },
    {
      winner: false,
      leftMovements: 0
    },
    {
      winner: false,
      leftMovements: 0
    },
    {
      winner: false,
      leftMovements: 0
    }
  ];

  it('should have the score legend', () => {
    render(<ScoreInfo completedGames={0} levelNumber={0} results={emptyResultsMock} />);
    const scoreLegend = screen.getByText(/Score/i);
    expect(scoreLegend).toBeInTheDocument();
  });

  it('should show wins correctly', () => {
    render(<ScoreInfo completedGames={0} levelNumber={0} results={resultsMock} />);
    const winsLegend = screen.getByText(/Wins: 2/i);
    expect(winsLegend).toBeInTheDocument();
  });

  it('should show loses correctly', () => {
    render(<ScoreInfo completedGames={0} levelNumber={0} results={resultsMock} />);
    const winsLegend = screen.getByText(/Loses: 3/i);
    expect(winsLegend).toBeInTheDocument();
  });
});
