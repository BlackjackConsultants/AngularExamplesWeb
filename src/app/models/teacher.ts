import { EntityBase } from './entity-base';
import { School } from './school';

export class Teacher extends EntityBase {
  constructor(firstName?: string, school?: School) {
    super();
    this.firstName = firstName;
    this.school = school as School || null;
  }
  id?: string;
  firstName?: string;
  lastName?: string;
  school!: School;
}
