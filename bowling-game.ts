export const createGame = () => {
    let rolls = [];
    return {
        roll: (pins: number) => {
            rolls = [...rolls, pins];
        },
        score: (): number => {
            let rollCounter = 0;
            let sum = 0;
            for(let frame = 0; frame < 10; frame++){
                const currentScore = rolls[rollCounter] + rolls[rollCounter + 1];
                if(currentScore === 10) {
                    sum += rolls[rollCounter + 2];
                }
                sum += currentScore;
                rollCounter += 2;
            }
            return sum;
        }
    }
}
