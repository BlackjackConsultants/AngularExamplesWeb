import { Phone } from "src/app/models/phone";
import { Address } from "src/app/models/address";
import { Teacher } from './teacher';
import { EntityBase } from './entity-base';

export class School extends EntityBase {
  constructor(name?: string) {
    super();
    this.teachers = [];
    this.name = name;
    this.updateId = 1;
  }

  name?: string;
  teachers?: Array<Teacher>;
}
