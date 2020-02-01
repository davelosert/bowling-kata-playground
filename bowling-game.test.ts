import {createGame} from './bowling-game';

describe('Bowling Game', () => {
    it('score is 0 when rolling only 0', () => {
        const game = createGame();
        for(let i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toBe(0);
    });

    it('score is 20 when rolling only 1s', () => {
        const game = createGame();
        for(let i = 0; i < 20; i++) {
            game.roll(1);
        }
        expect(game.score()).toBe(20);
    });

});