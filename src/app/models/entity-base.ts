import { Phone } from "src/app/models/phone";
import { Address } from "src/app/models/address";
import { Teacher } from './teacher';

/*
 * an entity is a class that is saved to the database.
 */
export class EntityBase {
  /*
   * this is a unique identifier in the datastore
   */
  id?: string;
  /*
   * this is a value that is incremented with each save. if the value is less
   * then the one in memory before a save, then you may have a concurrency issue
   * where another user update the record before you.
   */
  updateId?: number;
}
