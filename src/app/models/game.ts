import { Player } from "./player";

export class Game {
    players: Player[] = [];
    player!: Player 
    cards!: string[];

    get dealerCard() : string | undefined {
        if (this.players.length > 0) {
            if (this.players[0].cards.length > 0) {
                return this.players[0].cards[0];
            }
        }
        return undefined;
    }

    constructor(player?: Player) { 
        this.player = player || new Player("spied");
    }

    get Dealer(): Player {
        return this.players[0];
    }

    /**
     * initialize
     */
    initialize() {
        // this.settings.setValue(GlobalConstants.InitialBet, 10)
        // this.create();
        // this.shuffle();
    }

    /**
     * starts simulation a blackjack game
     */
    start() {
        this.createPlayers();
        for (let i = 0; i < this.players.length; i++) {
            const player = this.players[i];
            player.Play();
        }
    }

    /**
     * create players
     */
    createPlayers() {
        this.players.push(new Player('dealer'));
        this.players.push(new Player('adrian'));
    }
}
