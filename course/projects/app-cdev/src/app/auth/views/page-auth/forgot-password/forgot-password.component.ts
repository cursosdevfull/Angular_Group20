import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'cdev-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrl: './forgot-password.component.scss',
    imports: [ReactiveFormsModule]
})
export class ForgotPasswordComponent {
    forgotPasswordForm: FormGroup;

    constructor() {
        this.forgotPasswordForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email])
        });
    }

    onSubmit() {
        if (this.forgotPasswordForm.valid) {
            // Handle password recovery logic here (e.g., send email)
            console.log('Requesting password reset for:', this.forgotPasswordForm.value.email);
        } else {
            // Mark all fields as touched to display validation errors
            Object.keys(this.forgotPasswordForm.controls).forEach(key => {
                this.forgotPasswordForm.get(key)?.markAsTouched();
            });
        }
    }
}