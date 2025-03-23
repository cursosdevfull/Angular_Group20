import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';

@Component({
  selector: 'cdev-assessments',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './assessments.component.html',
  styleUrl: './assessments.component.scss'
})
export class AssessmentsComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
