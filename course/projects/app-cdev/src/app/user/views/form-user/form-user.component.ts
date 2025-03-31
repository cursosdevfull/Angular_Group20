import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cdev-form-user',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule], templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormUserComponent {
  fg: FormGroup

  private readonly data = inject(MAT_DIALOG_DATA)
  title = this.data ? "EDIT" : "ADD"

  constructor(private readonly reference: MatDialogRef<FormUserComponent>) {
    this.fg = new FormGroup({
      userId: new FormControl(this.data?.userId),
      name: new FormControl(this.data?.name, Validators.required),
      email: new FormControl(this.data?.email, [Validators.required, Validators.email]),
      role: new FormControl(this.data?.role, Validators.required),
    });
  }

  save() {
    const values = this.fg.value
    this.reference.close(values)
  }
}
