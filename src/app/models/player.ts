import { Game } from "./game";

export class Player {
    name: string;
    betAmount: number = 0;
    cards!: string[];

    constructor(name: string) {
        this.name = name;
    }

    /**
     * player makes a move
     * @param dealerCard play
     * @param hand 
     * @returns 
     */
    Play() {
        this.placeInitialBet();
    }
    
    placeInitialBet() {
        this.betAmount = 10;
    }
}

