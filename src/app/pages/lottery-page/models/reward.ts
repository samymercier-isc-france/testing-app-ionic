export class Reward {
    rewardRarity: number;
    item: string;
    amount: number;

    constructor(rewardRarity: number, item: string, amount: number){
        this.rewardRarity = rewardRarity;
        this.item = item;
        this.amount =amount;
    }
}
