export const createGame = () => {
    let scored = false;
    let score = 0;
    return {
        roll: (pins: number) => {
            score += pins;
        },
        score: (): number => {
            return score;
        }
    }
}
