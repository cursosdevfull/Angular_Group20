import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'cdev-page-user',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.scss'
})
export class PageUserComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
