import { Component } from '@angular/core';
import { StarshipComponent } from './with-signals-http-resource/starship/starship.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [StarshipComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {

}
