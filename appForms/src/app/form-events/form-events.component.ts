import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ValidateForm } from './validate-form';

@Component({
  selector: 'app-form-events',
  imports: [NgClass],
  templateUrl: './form-events.component.html',
  styleUrl: './form-events.component.css'
})
export class FormEventsComponent {
  isValid = false
  validateForm: ValidateForm = new ValidateForm()

  inputEmail(evt: Event) {
    this.validateForm.email = (evt.target as HTMLInputElement).value;
    this.validate();
  }

  inputPassword(evt: Event) {
    this.validateForm.password = (evt.target as HTMLInputElement).value;
    this.validate()
  }

  validate() {
    this.isValid = this.validateForm.isEmailValid(this.validateForm.email) && this.validateForm.isPasswordValid(this.validateForm.password)
  }

  login() {
    console.log('email:', this.validateForm.email);
    console.log('password:', this.validateForm.password);
  }

}
