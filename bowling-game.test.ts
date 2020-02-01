import {createGame} from './bowling-game';

describe('Bowling Game', () => {
    let game;

    const rollMany = (timesRolled: number, score: number) => {
        for(let i = 0; i < timesRolled; i++) {
            game.roll(score);
        }
    }
    beforeEach(() => {
        game = createGame();
    });

    it('score is 0 when rolling only 0', () => {
        rollMany(20, 0);
        expect(game.score()).toBe(0);
    });

    it('score is 20 when rolling only 1s', () => {
        rollMany(20, 1);
        expect(game.score()).toBe(20);
    });

    it('score is 13 when rolling a spare followed by 3 pins', () => {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(17, 0);
        expect(game.score()).toBe(16);

    });
    
});