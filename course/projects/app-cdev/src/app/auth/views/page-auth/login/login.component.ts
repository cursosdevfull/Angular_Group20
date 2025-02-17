import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cdev-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup!: FormGroup;

  constructor() {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]),
      otp: new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)])
    })
  }

  onLogin() {
    const isValidForm = this.formGroup.valid
    if (isValidForm) {
      console.log(this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }


}
