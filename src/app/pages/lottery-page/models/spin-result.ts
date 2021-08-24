import { Reward } from "./reward";

export class SpinResult {
    randomNumber: number;
    reward: Reward;

    constructor(randomNumber: number, reward: Reward){
        this.randomNumber = randomNumber;
        this.reward = reward;
    }
}
