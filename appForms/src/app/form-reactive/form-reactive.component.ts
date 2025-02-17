import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ValidateForm } from './validate-form';

@Component({
  selector: 'app-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, ValidateForm.validateFilterEmails("@company.com", "@company.org", "@company.net")]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{5,}$/)]),
      confirmPassword: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{5,}$/)])
    }, { validators: ValidateForm.validateConfirmPassword })
  }



  login() {
    console.log(this.formGroup)
  }
}
