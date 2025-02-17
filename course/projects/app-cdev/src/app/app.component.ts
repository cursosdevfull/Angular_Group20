import { Component } from '@angular/core';
import { PageAuthComponent } from './auth/views/page-auth/page-auth.component';

@Component({
  selector: 'cdev-root',
  imports: [PageAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'appCDev';
}
