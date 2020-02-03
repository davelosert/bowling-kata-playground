import { createInitialGameState, rollPins, getScore as calculateScore } from './bowling-game';
describe('Bowling Game', () => {
    let gameState;
    beforeEach(() => {
        gameState = createInitialGameState();
    });

    it('scores 0 when rolling only 0s', () => {
        rollMany(gameState, 20, 0);

        expect(calculateScore(gameState)).toBe(0);
    });

    it('scores 20 when rolling only 1s', () => {
        rollMany(gameState, 20, 1);

        expect(calculateScore(gameState)).toBe(20);
    });

    it('adds score of next roll on spare', () => {
        rollPins(gameState, 5);
        rollPins(gameState, 5);
        rollPins(gameState, 3);
        rollMany(gameState, 17, 0);

        expect(calculateScore(gameState)).toBe(16);
    });

    it('adds score of next frame on strike', () => {
        rollPins(gameState, 10);
        rollPins(gameState, 3);
        rollPins(gameState, 4);
        rollMany(gameState, 16, 0);

        expect(calculateScore(gameState)).toBe(24);
    });

    it('does not count a spare if score is 10 in two different frames', () => {
        rollPins(gameState, 0);
        rollPins(gameState, 5);
        rollPins(gameState, 5);
        rollPins(gameState, 3);

        expect(calculateScore(gameState)).toBe(13);
    });

    it('scores 300 on perfect game', () => {
        rollMany(gameState, 12, 10);

        expect(calculateScore(gameState)).toBe(300);
    });

   it('counts strikes in normal games', () => {
       rollMany(gameState, 10, 0);
       rollPins(gameState, 10);
       rollPins(gameState, 3);
       rollPins(gameState, 4);
       rollMany(gameState, 6, 0);
       expect(calculateScore(gameState)).toBe(24);

       
   }); 
});

function rollMany(gameState: any, rollCount: number, rollScore: number) {
    for (let i = 0; i < rollCount; i++)
        rollPins(gameState, rollScore);
}
