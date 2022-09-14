import React from 'react';
// @ts-ignore
import { render, screen } from '@testing-library/react';
import { PositionBlock } from './PositionBlock';
import { POSITION_ROW_TYPE } from '../redux/reducers/level';

describe('PositionBlock', () => {
  beforeEach(() => {});

  it('should have the batman character on current position', () => {
    render(<PositionBlock positionType={POSITION_ROW_TYPE.currentPosition} isCurrentPosition isLoser={false} isWinner={false} />);
    const mainCharacter = screen.getByTitle(/Batman/i);
    expect(mainCharacter).toBeInTheDocument();
  });

  it('should show the diamond when the current position is in finish position', () => {
    render(<PositionBlock positionType={POSITION_ROW_TYPE.finishPosition} isCurrentPosition isLoser={false} isWinner={false} />);
    const diamondPrize = screen.getByTitle(/Diamond/i);
    expect(diamondPrize).toBeInTheDocument();
  });

  it('should not show the diamond when the current position is not in finish position to keep it secret in war fog', () => {
    render(<PositionBlock positionType={POSITION_ROW_TYPE.finishPosition} isCurrentPosition={false} isLoser={false} isWinner={false} />);
    const diamondPrize = screen.queryByTitle(/Diamond/i);
    expect(diamondPrize).not.toBeInTheDocument();
  });

  it('should show the castle when start position', () => {
    render(<PositionBlock positionType={POSITION_ROW_TYPE.startPosition} isCurrentPosition isLoser={false} isWinner={false} />);
    const castleInStartingPosition = screen.queryByTitle(/Castle in starting position/i);
    expect(castleInStartingPosition).toBeInTheDocument();
  });

  it('should show the obstacle when obstacle position type', () => {
    render(<PositionBlock positionType={POSITION_ROW_TYPE.obstacle} isCurrentPosition isLoser={false} isWinner={false} />);
    const castleInStartingPosition = screen.queryByTitle(/Obstacle path/i);
    expect(castleInStartingPosition).toBeInTheDocument();
  });

  it('should show the free space when free space position type', () => {
    render(<PositionBlock positionType={POSITION_ROW_TYPE.freeSpace} isCurrentPosition isLoser={false} isWinner={false} />);
    const freeSpace = screen.queryByTitle(/Free space path/i);
    expect(freeSpace).toBeInTheDocument();
  });
});
