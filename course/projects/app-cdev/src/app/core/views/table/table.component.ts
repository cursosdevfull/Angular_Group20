import { Component, contentChildren, effect, HostBinding, Input, input, linkedSignal, output, viewChild } from '@angular/core';
import { MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
import { Metadata } from '../../types/metadata.type';
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-om-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
}

@Component({
  selector: 'cdev-table',
  imports: [MatTableModule, PerfectScrollbarModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ]
})
export class TableComponent {
  @HostBinding("style.height") @Input() height = "90%"
  onSelect = output<any>()

  columnsDef = contentChildren<MatColumnDef>(MatColumnDef)
  table = viewChild.required<MatTable<any>>(MatTable)

  displayedColumns = linkedSignal(() => {
    return this.metadata().map(column => column.field);
  })

  metadata = input<Metadata>([])
  data = input<any[]>([])

  selectRegister(row: any) {
    this.onSelect.emit(row)
  }

  constructor() {
    effect(() => {
      const columns = this.columnsDef()

      if (columns) {
        for (const column of columns) {
          if (!this.displayedColumns().includes(column.name)) {
            this.table().addColumnDef(column)
            this.displayedColumns.update(columns => [...columns, column.name])
          }
        }
      }
    })
  }
}
