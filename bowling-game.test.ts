import { createInitialGameState, GameState, rollPins, calculateScore } from './bowling-game';
import * as R from 'ramda';

describe('Bowling Game', () => {
    const assertEquals = R.curry((actual: number, expected: number) => expect(expected).toBe(actual));
    const rollMany = R.curry((times: number, pins: number, gameState: GameState): GameState => {
        for (let i = 0; i < times; i++) {
            gameState = rollPins(pins, gameState);
        }
        return gameState;
    });

    it('scores 0 when only 0 are rolled', () => {
        R.pipe(
            createInitialGameState,
            rollMany(20, 0),
            calculateScore,
            assertEquals(0)
        )();
    });

    it('scores 1 when only 1s are rolled', () => {
        R.pipe(
            createInitialGameState,
            rollMany(20, 1),
            calculateScore,
            assertEquals(20)
        )();
    });

    it('scores the next frim on a strike', () => {
        R.pipe(
            createInitialGameState,
            rollPins(5),
            rollPins(5),
            rollPins(3),
            rollMany(17, 0),
            calculateScore,
            assertEquals(16)
        )();
    });
});