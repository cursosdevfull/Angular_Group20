import { Component } from '@angular/core';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';

@Component({
  selector: 'app-root',
  imports: [FormReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appForms';
}
