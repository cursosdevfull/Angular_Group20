import { Component } from '@angular/core';
import { StarshipListComponent } from '../starship-list/starship-list.component';
import { StarshipDetailComponent } from '../starship-detail/starship-detail.component';

@Component({
  selector: 'app-starship',
  imports: [StarshipListComponent, StarshipDetailComponent],
  templateUrl: './starship.component.html',
  styleUrl: './starship.component.css'
})
export class StarshipComponent {

}
