import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { Metadata } from '../../../core/types/metadata.type';
import { PaginatorComponent } from '../../../core/views/paginator/paginator.component';
import { TableComponent } from '../../../core/views/table/table.component';
import { SubtitleComponent } from '../../../core/views/subtitle/subtitle.component';
import { BaseComponent } from '../../../core/component/base.component';
import { FormAttendanceComponent } from './form-attendance/form-attendance.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'cdev-attendance',
  imports: [ContainerComponent, SubtitleComponent, MatButtonModule, TableComponent, PaginatorComponent, MatDialogModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent extends BaseComponent {
  subtitle = "Attendance"

  metadata: Metadata = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'status', label: 'Status' }
  ]

  dataOriginal = [
    { id: 1, name: 'Attendance 1', status: 'Present' },
    { id: 2, name: 'Attendance 2', status: 'Absent' },
    { id: 3, name: 'Attendance 3', status: 'Present' },
    { id: 4, name: 'Attendance 4', status: 'Absent' },
    { id: 5, name: 'Attendance 5', status: 'Present' },
    { id: 6, name: 'Attendance 6', status: 'Absent' },
    { id: 7, name: 'Attendance 7', status: 'Present' },
    { id: 8, name: 'Attendance 8', status: 'Absent' },
    { id: 9, name: 'Attendance 9', status: 'Present' },
    { id: 10, name: 'Attendance 10', status: 'Absent' },
    { id: 11, name: 'Attendance 11', status: 'Present' },
    { id: 12, name: 'Attendance 12', status: 'Absent' },
    { id: 13, name: 'Attendance 13', status: 'Present' },
    { id: 14, name: 'Attendance 14', status: 'Absent' },
    { id: 15, name: 'Attendance 15', status: 'Present' },
    { id: 16, name: 'Attendance 16', status: 'Absent' },
    { id: 17, name: 'Attendance 17', status: 'Present' },
    { id: 18, name: 'Attendance 18', status: 'Absent' },
    { id: 19, name: 'Attendance 19', status: 'Present' },
    { id: 20, name: 'Attendance 20', status: 'Absent' },
    { id: 21, name: 'Attendance 21', status: 'Present' },
    { id: 22, name: 'Attendance 22', status: 'Absent' },
    { id: 23, name: 'Attendance 23', status: 'Present' },
    { id: 24, name: 'Attendance 24', status: 'Absent' },
    { id: 25, name: 'Attendance 25', status: 'Present' },
    { id: 26, name: 'Attendance 26', status: 'Absent' },
    { id: 27, name: 'Attendance 27', status: 'Present' },
    { id: 28, name: 'Attendance 28', status: 'Absent' },
    { id: 29, name: 'Attendance 29', status: 'Present' },
    { id: 30, name: 'Attendance 30', status: 'Absent' },
    { id: 31, name: 'Attendance 31', status: 'Present' },
    { id: 32, name: 'Attendance 32', status: 'Absent' },
    { id: 33, name: 'Attendance 33', status: 'Present' },
    { id: 34, name: 'Attendance 34', status: 'Absent' },
    { id: 35, name: 'Attendance 35', status: 'Present' },
    { id: 36, name: 'Attendance 36', status: 'Absent' },
    { id: 37, name: 'Attendance 37', status: 'Present' },
    { id: 38, name: 'Attendance 38', status: 'Absent' },
    { id: 39, name: 'Attendance 39', status: 'Present' },
    { id: 40, name: 'Attendance 40', status: 'Absent' },
    { id: 41, name: 'Attendance 41', status: 'Present' },
    { id: 42, name: 'Attendance 42', status: 'Absent' },
    { id: 43, name: 'Attendance 43', status: 'Present' },
    { id: 44, name: 'Attendance 44', status: 'Absent' },
    { id: 45, name: 'Attendance 45', status: 'Present' },
    { id: 46, name: 'Attendance 46', status: 'Absent' },
    { id: 47, name: 'Attendance 47', status: 'Present' },
    { id: 48, name: 'Attendance 48', status: 'Absent' },
    { id: 49, name: 'Attendance 49', status: 'Present' },
    { id: 50, name: 'Attendance 50', status: 'Absent' }
  ]

  override filename = "exported-attendance"
  override subject = "Attendance"

  constructor() {
    super(FormAttendanceComponent, "dialog-form-attendance", "id")
    this.loadPage(0)
  }
}
