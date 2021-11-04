import { Game } from './game';
import { Player } from './player';

describe('Game', () => {
  let player = new Player('dealer');
  let game = new Game(player);

  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  fit('should skip method', () => {
    let spy = spyOn(player, 'Play');
    game.start();
    expect(game.players[0].betAmount).toBe(0);
  });
});
