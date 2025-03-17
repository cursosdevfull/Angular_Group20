import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'cdev-page-schedule',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-schedule.component.html',
  styleUrl: './page-schedule.component.scss'
})
export class PageScheduleComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
