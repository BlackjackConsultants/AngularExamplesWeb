import { EntityBase } from './entity-base';
import { School } from './school';

export class Perimeter {
  public calculate(side: number): number;
  public calculate(side: number, side2?: number): number;
  public calculate(side: number, side2?: number, side3?: number, side4?: number): number {
    if (side4 && side2 && side3) {
      return side + side2 + side3 + side4;
    }
    else if (side2) {
      return side + side2 + side + side2;
    }
    else {
      return side + side + side + side;
    }
  }
}
