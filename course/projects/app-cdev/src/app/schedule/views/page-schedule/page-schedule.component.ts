import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { LayoutService } from '../../../core/services/layout.service';
import { MatButtonModule } from '@angular/material/button';
import { Metadata } from '../../../core/types/metadata.type';
import { PaginatorComponent } from '../../../core/views/paginator/paginator.component';
import { TableComponent } from '../../../core/views/table/table.component';
import { BaseComponent } from '../../../core/component/base.component';
import { FormScheduleComponent } from '../form-schedule/form-schedule.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'cdev-page-schedule',
  imports: [ContainerComponent, TitleComponent, MatButtonModule, TableComponent, PaginatorComponent, MatDialogModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './page-schedule.component.html',
  styleUrl: './page-schedule.component.scss'
})
export class PageScheduleComponent extends BaseComponent {
  metadata: Metadata = [
    { field: 'scheduleId', label: 'Schedule ID' },
    { field: 'name', label: 'Name' },
    { field: 'date', label: 'Date' },
    { field: 'status', label: 'Status' },
  ]

  dataOriginal = [
    { scheduleId: 1, name: 'Schedule 1', date: '2023-10-01', status: 'active' },
    { scheduleId: 2, name: 'Schedule 2', date: '2023-10-02', status: 'inactive' },
    { scheduleId: 3, name: 'Schedule 3', date: '2023-10-03', status: 'active' },
    { scheduleId: 4, name: 'Schedule 4', date: '2023-10-04', status: 'inactive' },
    { scheduleId: 5, name: 'Schedule 5', date: '2023-10-05', status: 'active' },
    { scheduleId: 6, name: 'Schedule 6', date: '2023-10-06', status: 'inactive' },
    { scheduleId: 7, name: 'Schedule 7', date: '2023-10-07', status: 'active' },
    { scheduleId: 8, name: 'Schedule 8', date: '2023-10-08', status: 'inactive' },
    { scheduleId: 9, name: 'Schedule 9', date: '2023-10-09', status: 'active' },
    { scheduleId: 10, name: 'Schedule 10', date: '2023-10-10', status: 'inactive' },
    { scheduleId: 11, name: 'Schedule 11', date: '2023-10-11', status: 'active' },
    { scheduleId: 12, name: 'Schedule 12', date: '2023-10-12', status: 'inactive' },
    { scheduleId: 13, name: 'Schedule 13', date: '2023-10-13', status: 'active' },
    { scheduleId: 14, name: 'Schedule 14', date: '2023-10-14', status: 'inactive' },
    { scheduleId: 15, name: 'Schedule 15', date: '2023-10-15', status: 'active' },
    { scheduleId: 16, name: 'Schedule 16', date: '2023-10-16', status: 'inactive' },
    { scheduleId: 17, name: 'Schedule 17', date: '2023-10-17', status: 'active' },
    { scheduleId: 18, name: 'Schedule 18', date: '2023-10-18', status: 'inactive' },
    { scheduleId: 19, name: 'Schedule 19', date: '2023-10-19', status: 'active' },
    { scheduleId: 20, name: 'Schedule 20', date: '2023-10-20', status: 'inactive' },
    { scheduleId: 21, name: 'Schedule 21', date: '2023-10-21', status: 'active' },
    { scheduleId: 22, name: 'Schedule 22', date: '2023-10-22', status: 'inactive' },
    { scheduleId: 23, name: 'Schedule 23', date: '2023-10-23', status: 'active' },
    { scheduleId: 24, name: 'Schedule 24', date: '2023-10-24', status: 'inactive' },
    { scheduleId: 25, name: 'Schedule 25', date: '2023-10-25', status: 'active' },
    { scheduleId: 26, name: 'Schedule 26', date: '2023-10-26', status: 'inactive' },
    { scheduleId: 27, name: 'Schedule 27', date: '2023-10-27', status: 'active' },
    { scheduleId: 28, name: 'Schedule 28', date: '2023-10-28', status: 'inactive' },
    { scheduleId: 29, name: 'Schedule 29', date: '2023-10-29', status: 'active' },
    { scheduleId: 30, name: 'Schedule 30', date: '2023-10-30', status: 'inactive' },
    { scheduleId: 31, name: 'Schedule 31', date: '2023-10-31', status: 'active' },
    { scheduleId: 32, name: 'Schedule 32', date: '2023-11-01', status: 'inactive' },
    { scheduleId: 33, name: 'Schedule 33', date: '2023-11-02', status: 'active' },
    { scheduleId: 34, name: 'Schedule 34', date: '2023-11-03', status: 'inactive' },
    { scheduleId: 35, name: 'Schedule 35', date: '2023-11-04', status: 'active' },
    { scheduleId: 36, name: 'Schedule 36', date: '2023-11-05', status: 'inactive' },
    { scheduleId: 37, name: 'Schedule 37', date: '2023-11-06', status: 'active' },
    { scheduleId: 38, name: 'Schedule 38', date: '2023-11-07', status: 'inactive' },
    { scheduleId: 39, name: 'Schedule 39', date: '2023-11-08', status: 'active' },
    { scheduleId: 40, name: 'Schedule 40', date: '2023-11-09', status: 'inactive' },
    { scheduleId: 41, name: 'Schedule 41', date: '2023-11-10', status: 'active' },
    { scheduleId: 42, name: 'Schedule 42', date: '2023-11-11', status: 'inactive' },
    { scheduleId: 43, name: 'Schedule 43', date: '2023-11-12', status: 'active' },
  ]

  override filename = "exported-schedules"
  override subject = "Schedules"

  constructor() {
    super(FormScheduleComponent, "dialog-form-schedule", "scheduleId")
    this.loadPage(0)
  }
}
