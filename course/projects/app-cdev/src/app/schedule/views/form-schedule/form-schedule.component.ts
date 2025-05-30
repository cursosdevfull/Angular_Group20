import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cdev-form-schedule',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule], templateUrl: './form-schedule.component.html',
  styleUrl: './form-schedule.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class FormScheduleComponent {
  fg: FormGroup

  private readonly data = inject(MAT_DIALOG_DATA)
  title = this.data ? "EDIT" : "ADD"

  constructor(private readonly reference: MatDialogRef<FormScheduleComponent>) {
    this.fg = new FormGroup({
      scheduleId: new FormControl(this.data?.scheduleId),
      name: new FormControl(this.data?.name, Validators.required),
      date: new FormControl(this.data?.date, Validators.required),
      status: new FormControl(this.data?.status, Validators.required),
    });
  }

  save() {
    const values = this.fg.value
    this.reference.close(values)
  }
}
