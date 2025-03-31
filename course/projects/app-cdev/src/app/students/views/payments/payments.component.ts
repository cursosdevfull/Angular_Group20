import { Component } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { MatButtonModule } from '@angular/material/button';
import { Metadata } from '../../../core/types/metadata.type';
import { PaginatorComponent } from '../../../core/views/paginator/paginator.component';
import { TableComponent } from '../../../core/views/table/table.component';
import { SubtitleComponent } from '../../../core/views/subtitle/subtitle.component';
import { BaseComponent } from '../../../core/component/base.component';
import { FormPaymentsComponent } from './form-payments/form-payments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'cdev-payments',
  imports: [ContainerComponent, SubtitleComponent, MatButtonModule, TableComponent, PaginatorComponent, MatDialogModule, MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent extends BaseComponent {
  subtitle = "Payments"

  metadata: Metadata = [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'status', label: 'Status' }
  ]

  dataOriginal = [
    { id: 1, name: 'Payment 1', status: 'Completed' },
    { id: 2, name: 'Payment 2', status: 'In Progress' },
    { id: 3, name: 'Payment 3', status: 'Not Started' },
    { id: 4, name: 'Payment 4', status: 'Completed' },
    { id: 5, name: 'Payment 5', status: 'In Progress' },
    { id: 6, name: 'Payment 6', status: 'Not Started' },
    { id: 7, name: 'Payment 7', status: 'Completed' },
    { id: 8, name: 'Payment 8', status: 'In Progress' },
    { id: 9, name: 'Payment 9', status: 'Not Started' },
    { id: 10, name: 'Payment 10', status: 'Completed' },
    { id: 11, name: 'Payment 11', status: 'In Progress' },
    { id: 12, name: 'Payment 12', status: 'Not Started' },
    { id: 13, name: 'Payment 13', status: 'Completed' },
    { id: 14, name: 'Payment 14', status: 'In Progress' },
    { id: 15, name: 'Payment 15', status: 'Not Started' },
    { id: 16, name: 'Payment 16', status: 'Completed' },
    { id: 17, name: 'Payment 17', status: 'In Progress' },
    { id: 18, name: 'Payment 18', status: 'Not Started' },
    { id: 19, name: 'Payment 19', status: 'Completed' },
    { id: 20, name: 'Payment 20', status: 'In Progress' },
    { id: 21, name: 'Payment 21', status: 'Not Started' },
    { id: 22, name: 'Payment 22', status: 'Completed' },
    { id: 23, name: 'Payment 23', status: 'In Progress' },
    { id: 24, name: 'Payment 24', status: 'Not Started' },
    { id: 25, name: 'Payment 25', status: 'Completed' },
    { id: 26, name: 'Payment 26', status: 'In Progress' },
    { id: 27, name: 'Payment 27', status: 'Not Started' },
    { id: 28, name: 'Payment 28', status: 'Completed' },
    { id: 29, name: 'Payment 29', status: 'In Progress' },
    { id: 30, name: 'Payment 30', status: 'Not Started' },
    { id: 31, name: 'Payment 31', status: 'Completed' },
    { id: 32, name: 'Payment 32', status: 'In Progress' },
    { id: 33, name: 'Payment 33', status: 'Not Started' },
    { id: 34, name: 'Payment 34', status: 'Completed' },
    { id: 35, name: 'Payment 35', status: 'In Progress' },
    { id: 36, name: 'Payment 36', status: 'Not Started' },
    { id: 37, name: 'Payment 37', status: 'Completed' },
    { id: 38, name: 'Payment 38', status: 'In Progress' },
    { id: 39, name: 'Payment 39', status: 'Not Started' },
    { id: 40, name: 'Payment 40', status: 'Completed' },
    { id: 41, name: 'Payment 41', status: 'In Progress' },
    { id: 42, name: 'Payment 42', status: 'Not Started' },
    { id: 43, name: 'Payment 43', status: 'Completed' },
    { id: 44, name: 'Payment 44', status: 'In Progress' },
    { id: 45, name: 'Payment 45', status: 'Not Started' },
    { id: 46, name: 'Payment 46', status: 'Completed' },
    { id: 47, name: 'Payment 47', status: 'In Progress' },
    { id: 48, name: 'Payment 48', status: 'Not Started' },
    { id: 49, name: 'Payment 49', status: 'Completed' },
    { id: 50, name: 'Payment 50', status: 'In Progress' }
  ]

  constructor() {
    super(FormPaymentsComponent, "dialog-form-payments", "id")
    this.loadPage(0)
  }
}
