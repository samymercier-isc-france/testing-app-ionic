import { Item } from "./item";

export class Reward {
    rarity: number;
    item: Item;
    amount: number;

    constructor(rarity: number, item: Item, amount: number){
        this.rarity = rarity;
        this.item = item;
        this.amount =amount;
    }
}
