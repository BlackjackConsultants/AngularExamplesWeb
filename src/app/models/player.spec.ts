import { Game } from './game';
import { Player } from './player';

describe('Player', () => {
  it('should create an instance', () => {
    let game = new Game();
    expect(new Player('dealer')).toBeTruthy();
  });
});
