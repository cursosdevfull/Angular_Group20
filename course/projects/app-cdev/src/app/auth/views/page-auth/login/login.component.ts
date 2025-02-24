import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, ResponseLogin } from '../../../services/auth.service';

@Component({
  selector: 'cdev-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup!: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/)]),
      /*       otp: new FormControl(null, [Validators.required, Validators.pattern(/^\d{6}$/)]) */
    })
  }

  onLogin() {
    const { email, password } = this.formGroup.value

    this.authService.login(email, password)
      .then((response: ResponseLogin) => {
        alert(response.message)
      })
      .catch((error: { status: number, message: string }) => {
        alert(error.message)
      })

    /*   if (isValidForm) {
        alert("Login successful")
      } else {
        alert("Login failed")
      } */

    //const isValidForm = this.formGroup.valid


    /*     if (isValidForm) {
          console.log(this.formGroup.value);
        } else {
          console.log('Form is invalid');
        } */
  }


}
