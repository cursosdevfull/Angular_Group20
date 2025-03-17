import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'cdev-page-course',
  imports: [ContainerComponent, TitleComponent],
  templateUrl: './page-course.component.html',
  styleUrl: './page-course.component.scss'
})
export class PageCourseComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
