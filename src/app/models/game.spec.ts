import { Game } from './game';
import { Player } from './player';

describe('Game', () => {

  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });

  it('should skip method', () => {
    let player = new Player('dealer');
    let game = new Game(player);
    let spy = spyOn(player, 'Play');
    game.start();
    expect(game.players[0].betAmount).toBe(10);
    expect(game.player.betAmount).toBe(0);
  });

  it('should replace method', () => {
    let player = new Player('dealer');
    let game = new Game(player);
    let spy = spyOn(player, 'Play').and.callFake(function () {
      player.betAmount = 98;
    });
    game.start();
    expect(game.players[0].betAmount).toBe(10);
    expect(game.player.betAmount).toBe(98);
  });
});
