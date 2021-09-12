import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { FormControl } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { IDValidator } from 'src/app/validators/IDValidator';
import { UserValidator } from 'src/app/validators/user.validator';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AngularFormsComponent implements OnInit {
  contactsFormGroup!: FormGroup;
  contactsGroup2!: FormGroup;
  contact: Contact = new Contact();
  contactForm: FormGroup;

  Occupations = [
    { id: 1, name: 'Astrounaut' },
    { id: 2, name: 'Engineer' },
    { id: 3, name: 'Teacher' }
  ];

  validation_messages = {
    'FirstName': [
      { type: 'required', message: 'Full name is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
    ]
  };

  constructor(private formBuilder: FormBuilder, private userValidator: UserValidator) {
    IDValidator.names = [];
    IDValidator.names.push('jorge');
    this.contactForm = this.formBuilder.group({
      firstName: ['', {validators: [Validators.required], updateOn: 'change' } ],
      lastName: ['', {validators: [Validators.required, IDValidator.nameNotTaken], updateOn: 'submit'}],
      alias: ['', [Validators.required], this.userValidator.userValidator(), {updateOn: 'submit'}]
    });
  }

  basicSumbit() {
    if (this.contactForm.valid) {
      const contact: Contact = new Contact( {FirstName: this.contactForm.value.firstName,
        LastName: this.contactForm.value.lastName}
      );
      // tslint:disable-next-line: no-console
      console.debug('contact can be sent to server to save here.');
    } else {
      // tslint:disable-next-line: no-console
      console.debug('contact information is invalid!!!');
    }
  }

  ngOnInit() {
    this.contact.FirstName = 'Jorge';
    this.contact?.Phones?.push({});
    this.createForms();
  }

  get phones(): FormArray {
    return this.contactsFormGroup.get('_phones') as FormArray;
  }

  createPhone(): FormGroup {
    return this.formBuilder.group({
      type: ['Home', Validators.nullValidator],
      phoneNumber: ['305-333-3333', Validators.required]
    });
  }

  checkFirstName(c: FormControl) {
    const parent = (<any>c)._parent;
    if (parent == null) {
      return { invalid: true };
    } else {
      return parent.controls.FirstNameValidation.value ? null : { invalid: true };
    }
  }

  checkLastName(c: FormControl) {
    const parent = (<any>c)._parent;
    if (parent == null) {
      return null;
    } else {
      parent.get('FirstName').setValue(parent.get('FirstName').value);
      parent.updateValueAndValidity();
      return null;
    }
  }

  validate() {
    this.contactsFormGroup?.get('FirstName')?.setValue(this.contactsFormGroup.get('FirstName')?.value);
    this.contactsFormGroup.updateValueAndValidity();
  }

  createForms() {
    this.contactsFormGroup = this.formBuilder.group({
      FirstName: [this.contact.FirstName, [this.checkFirstName, Validators.required]],
      LastName: [this.contact.LastName, [this.checkLastName, Validators.required]],
      FirstNameValidation: [false, Validators.nullValidator], /* this value is just for forcing custom validation to pass or fail */
      Occupation: [this.contact.Occupation, Validators.nullValidator],
      BirthDay: [this.contact.BirthDay, Validators.nullValidator],
      _phones: this.formBuilder.array([this.createPhone()])
    });

    this.contactsGroup2 = this.formBuilder.group({
      FirstName: [this.contact.FirstName, Validators.required],
      LastName: [this.contact.LastName, Validators.required],
      Occupation: [this.contact.Occupation, Validators.required],
      BirthDay: [this.contact.BirthDay, Validators.required]
    });
  }

  addPhone(): void {
    this.phones.push(this.createPhone());
  }

  onSubmitUserDetails(value) {
    console.log(value);
    console.log(this.contact.FirstName);
  }

  onSubmitUserDetails2(value) {
    console.log(value);
    console.log(this.contact.FirstName);
  }
}
