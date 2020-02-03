export const createInitialGameState = () => ({
    rolledPins: []
});

export const rollPins = (gameState, knockedPins: number) => {
    gameState.rolledPins = [...gameState.rolledPins, knockedPins];
};

export const getScore = (gameState): number => {
    return gameState.rolledPins.reduce((currentScore, rolledPins, index) => {
        if (isNotBonusFrame(gameState, index) && isStrike(rolledPins)) {
            currentScore += gameState.rolledPins[index + 1] + gameState.rolledPins[index + 2];
        } else if (isFirstRollOfFrame(index) && isSpare(rolledPins, gameState, index)) {
            currentScore += gameState.rolledPins[index + 2];
        }
        currentScore += rolledPins;
        return currentScore;
    }, 0);
};

const isNotBonusFrame = (gameState: any, index: number) => gameState.rolledPins.length > index + 3;
const isStrike = (rolledPins: any) => rolledPins === 10;
const isFirstRollOfFrame = (index: number) => index % 2 === 0;
const isSpare = (rolledPins: any, gameState: any, index: number) => rolledPins + gameState.rolledPins[index + 1] === 10;

