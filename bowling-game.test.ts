import {createGame} from './bowling-game';

describe('Bowling Game', () => {
    it('score is 0 when rolling only 0 in a frame', () => {
        const game = createGame();
        game.roll(0);
        game.roll(0);
        expect(game.score()).toBe(0);
    });

    it('score is 1 when rolling only 1 in a frame', () => {
        const game = createGame();
        game.roll(0);
        game.roll(1);
        expect(game.score()).toBe(1);
    });

    it('test', () => {
        
    });
});