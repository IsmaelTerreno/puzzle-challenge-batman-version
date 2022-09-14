import React from 'react';
// @ts-ignore
import { render, screen } from '@testing-library/react';
import { LevelProgress } from './LevelProgress';
import { LEVELS } from '../redux/reducers/level';

describe('LevelProgress', () => {
  beforeEach(() => {});
  it('should have the level legend', () => {
    render(<LevelProgress currenLevel={0} />);
    const levelLegend = screen.getByRole('heading');
    expect(levelLegend).toHaveTextContent('Level: 1');
  });

  it('should have the progress bar level', () => {
    render(<LevelProgress currenLevel={0} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
  });

  it('should be 100% complete on last configured level', () => {
    const lastLevel = LEVELS.length;
    render(<LevelProgress currenLevel={lastLevel} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '100');
  });
});
