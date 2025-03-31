import { Component, input, output } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CustomPaginator } from './custom-paginator';

@Component({
  selector: 'cdev-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginator
    }
  ]
})
export class PaginatorComponent {
  length = input.required<number>();
  pageSize = input.required<number>();
  onChangePage = output<number>();

  changePage(evt: PageEvent) {
    this.onChangePage.emit(evt.pageIndex)
  }
}
