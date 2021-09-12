import { FormControl } from '@angular/forms';

interface ValidationResult {
  [key: string]: boolean;
}

export class IDValidator {
  static names: string[];

  constructor(names: string[]) {
    names = names;
  }

  static nameNotTaken(control: FormControl): ValidationResult {
    let retVal = { 'nameNotTaken': false };
    for (let i = 0; i < IDValidator.names.length; i++) {
      const name = IDValidator.names[i];
      if (control.value === name) {
        retVal = { 'nameNotTaken': true };
        break;
      }
    }
    return retVal;
  }
}
