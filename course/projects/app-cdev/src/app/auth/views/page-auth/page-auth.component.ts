import { Component, inject } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LayoutService } from '../../../core/services/layout.service';

@Component({
  selector: 'cdev-page-auth',
  imports: [LoginComponent],
  templateUrl: './page-auth.component.html',
  styleUrl: './page-auth.component.scss'
})
export class PageAuthComponent {
  layoutService = inject(LayoutService);

  constructor() {
    this.layoutService.layout.set({ header: false, menu: false });
  }
}
