import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import { DateTime } from "luxon";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dates-with-luxon';

  form: FormGroup;
  currentDate = new Date();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      checkDate: ['', [
        Validators.required,
        this.dateFieldValidater(),
      ]],
      checkMaskDate: ['', [
        Validators.required,
        this.dateIsVald(),
        this.dateWithMaskFieldValidater()
      ]]
    })
  }

  dateIsVald(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const checkDate = DateTime.fromFormat(control.value, 'ddMMyyyy');
      return !!control.parent && !!control.parent.value &&
        checkDate.isValid ? null : { dateIsValid: true };
    }
  }

  dateWithMaskFieldValidater(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentDate = DateTime.fromJSDate(this.currentDate);
      const checkDate = DateTime.fromFormat(control.value, 'ddMMyyyy');
      return !!control.parent && !!control.parent.value &&
        checkDate > currentDate ? null : { dateToCheck: true };
    };
  }

  dateFieldValidater(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currentDate = DateTime.fromJSDate(this.currentDate);
      const checkDate = DateTime.fromJSDate(new Date(control.value));
      return !!control.parent && !!control.parent.value &&
        checkDate > currentDate ? null : { dateToCheck: true };
    };
  }

  submitForm() {
    this.form.markAllAsTouched();

    //Get Date from Mask input and use Luxon fromFormat to convert to JS Date to display to console log
    let dateFromMask = DateTime.fromFormat(this.form.controls.checkMaskDate.value, 'ddMMyyyy');

    if (dateFromMask.isValid) {
      console.log(dateFromMask.toJSDate().toLocaleDateString());

    }

    console.log(dateFromMask.toJSDate().toLocaleDateString());

    //Get Date from Date Picker just dislay to console log
    let datePickerDate = new Date(this.form.controls.checkDate.value)
    console.log(datePickerDate.toLocaleDateString());

  }

  logDate() {

    let mask = '05011974';

    let date = DateTime.fromFormat(mask, 'ddMMyyyy');

    console.log(date.isValid);

    console.log(mask);
    console.log(date.toJSDate().toLocaleDateString());
    console.log(date);

  }
}
