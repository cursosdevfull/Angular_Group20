import { Component, computed, input, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
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
  selector: 'cdev-container',
  imports: [MatCardModule, MatTableModule, PerfectScrollbarModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
  ]
})
export class ContainerComponent {
  title = input<string>('');

  displayedColumns = computed(() => {
    return this.metadata().map(column => column.field);
  })

  metadata = input<Metadata>([])
  data = input<any[]>([])

  constructor() {

  }
}
