import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService, ResponseLogin } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cdev-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup!: FormGroup;
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.createForm();

    effect(() => {
      if (this.authService.userLogged()) {
        console.log("User logged in successfully");
        this.router.navigate(["/dashboard"])
      } else {
        //this.router.navigate(["/dashboard"])
      }
    })
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

    this.authService.login(email, password);
  }


}
