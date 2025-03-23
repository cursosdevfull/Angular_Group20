import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';

@Component({
  selector: 'cdev-payments',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.scss'
})
export class PaymentsComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
