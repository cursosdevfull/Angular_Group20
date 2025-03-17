import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';

@Component({
  selector: 'cdev-page-dashboard',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-dashboard.component.html',
  styleUrl: './page-dashboard.component.scss'
})
export class PageDashboardComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }

}
