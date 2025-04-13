import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { MatButtonModule } from '@angular/material/button';
import { Metadata } from '../../../core/types/metadata.type';
import { PaginatorComponent } from '../../../core/views/paginator/paginator.component';
import { TableComponent } from '../../../core/views/table/table.component';
import { SubtitleComponent } from '../../../core/views/subtitle/subtitle.component';
import { BaseComponent } from '../../../core/component/base.component';
import { FormAssessmentsComponent } from './form-assessments/form-assessments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'cdev-assessments',
  imports: [ContainerComponent, SubtitleComponent, MatButtonModule, TableComponent, PaginatorComponent, MatDialogModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})
export class AssessmentsComponent extends BaseComponent {
  subtitle = "Assessments"

  metadata: Metadata = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'status', label: 'Status' }
  ]

  dataOriginal = [
    { id: 1, name: 'Assessment 1', status: 'Completed' },
    { id: 2, name: 'Assessment 2', status: 'In Progress' },
    { id: 3, name: 'Assessment 3', status: 'Not Started' },
    { id: 4, name: 'Assessment 4', status: 'Completed' },
    { id: 5, name: 'Assessment 5', status: 'In Progress' },
    { id: 6, name: 'Assessment 6', status: 'Not Started' },
    { id: 7, name: 'Assessment 7', status: 'Completed' },
    { id: 8, name: 'Assessment 8', status: 'In Progress' },
    { id: 9, name: 'Assessment 9', status: 'Not Started' },
    { id: 10, name: 'Assessment 10', status: 'Completed' },
    { id: 11, name: 'Assessment 11', status: 'In Progress' },
    { id: 12, name: 'Assessment 12', status: 'Not Started' },
    { id: 13, name: 'Assessment 13', status: 'Completed' },
    { id: 14, name: 'Assessment 14', status: 'In Progress' },
    { id: 15, name: 'Assessment 15', status: 'Not Started' },
    { id: 16, name: 'Assessment 16', status: 'Completed' },
    { id: 17, name: 'Assessment 17', status: 'In Progress' },
    { id: 18, name: 'Assessment 18', status: 'Not Started' },
    { id: 19, name: 'Assessment 19', status: 'Completed' },
    { id: 20, name: 'Assessment 20', status: 'In Progress' },
    { id: 21, name: 'Assessment 21', status: 'Not Started' },
    { id: 22, name: 'Assessment 22', status: 'Completed' },
    { id: 23, name: 'Assessment 23', status: 'In Progress' },
    { id: 24, name: 'Assessment 24', status: 'Not Started' },
    { id: 25, name: 'Assessment 25', status: 'Completed' },
    { id: 26, name: 'Assessment 26', status: 'In Progress' },
    { id: 27, name: 'Assessment 27', status: 'Not Started' },
    { id: 28, name: 'Assessment 28', status: 'Completed' },
    { id: 29, name: 'Assessment 29', status: 'In Progress' },
    { id: 30, name: 'Assessment 30', status: 'Not Started' },
    { id: 31, name: 'Assessment 31', status: 'Completed' },
    { id: 32, name: 'Assessment 32', status: 'In Progress' },
    { id: 33, name: 'Assessment 33', status: 'Not Started' },
    { id: 34, name: 'Assessment 34', status: 'Completed' },
    { id: 35, name: 'Assessment 35', status: 'In Progress' },
    { id: 36, name: 'Assessment 36', status: 'Not Started' },
    { id: 37, name: 'Assessment 37', status: 'Completed' },
    { id: 38, name: 'Assessment 38', status: 'In Progress' },
    { id: 39, name: 'Assessment 39', status: 'Not Started' },
    { id: 40, name: 'Assessment 40', status: 'Completed' }
  ]

  override filename = "exported-assessments"
  override subject = "Assessments"

  constructor() {
    super(FormAssessmentsComponent, "dialog-form-assessments", "id")
    this.loadPage(0)
  }
}
