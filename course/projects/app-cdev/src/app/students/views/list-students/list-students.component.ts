import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../core/services/layout.service';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'cdev-list-students',
  imports: [TitleComponent, MatButtonModule, RouterOutlet],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.scss'
})
export class ListStudentsComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
