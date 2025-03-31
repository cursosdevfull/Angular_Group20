import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'cdev-form-course',
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './form-course.component.html',
  styleUrl: './form-course.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormCourseComponent {
  fg: FormGroup

  private readonly data = inject(MAT_DIALOG_DATA)
  title = this.data ? "EDIT" : "ADD"

  constructor(private readonly reference: MatDialogRef<FormCourseComponent>) {
    this.fg = new FormGroup({
      courseId: new FormControl(this.data?.courseId),
      courseName: new FormControl(this.data?.courseName, Validators.required),
      courseDescription: new FormControl(this.data?.courseDescription, Validators.required),
      courseDuration: new FormControl(this.data?.courseDuration, Validators.required),
    });
  }

  save() {
    const values = this.fg.value
    this.reference.close(values)
  }
}
