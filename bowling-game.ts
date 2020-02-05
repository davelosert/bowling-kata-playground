import * as R from 'ramda';

export type GameState = number[];
export const createInitialGameState = (): GameState => {
    return [];
};

export const rollPins = R.curry((knockedPins: number, gameState: GameState): GameState => {
    return [...gameState, knockedPins]
});

const reduceWithIndex = R.addIndex(R.reduce);

export const calculateScore = (gameState: GameState): number => {
    const score: unknown = reduceWithIndex((score: number, pins: number, index: number) => { 
       
        
         const isStrike = R.equals(R.nth(index)(gameState) + R.nth(index + 1)(gameState))(10);

         if(isStrike) {
             score += R.nth(index + 2)(gameState);
         }
         return score += pins 
        }, 0, gameState);
     return score as number;
}