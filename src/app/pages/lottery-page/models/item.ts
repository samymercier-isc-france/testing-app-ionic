export class Item {
    public itemId: number;
    private slots: number;
    private sort: number;
    private maxUpgrade: number;
    private enchant: number;
    private enchantAmount: number;
    private isTradable: boolean;
    private uniqueId: number;
    private attached: number;
    private potential: number;

    constructor(
        itemId: number,
        slots: number,
        sort: number,
        maxUpgrade: number,
        enchant: number,
        enchantAmount: number,
        isTradable: boolean,
        uniqueId: number,
        attached: number,
        potential: number
    ){
        this.itemId = itemId;
        this.slots = slots;
        this.sort = sort;
        this.maxUpgrade = maxUpgrade;
        this.enchant = enchant;
        this.enchantAmount = enchantAmount;
        this.isTradable = isTradable;
        this.uniqueId = uniqueId;
        this.attached = attached;
        this.potential = potential;
    }
}