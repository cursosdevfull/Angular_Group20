import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cdev-form-attendance',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form-attendance.component.html',
  styleUrl: './form-attendance.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormAttendanceComponent {
  fg: FormGroup

  private readonly data = inject(MAT_DIALOG_DATA)
  title = this.data ? "EDIT" : "ADD"

  constructor(private readonly reference: MatDialogRef<FormAttendanceComponent>) {
    this.fg = new FormGroup({
      id: new FormControl(this.data?.id),
      name: new FormControl(this.data?.name, Validators.required),
      status: new FormControl(this.data?.status, Validators.required),
    });
  }

  save() {
    const values = this.fg.value
    this.reference.close(values)
  }
}
