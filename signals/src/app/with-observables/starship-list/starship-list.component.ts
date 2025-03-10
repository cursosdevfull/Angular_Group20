import { Component, inject } from '@angular/core';
import { StarshipService } from '../starship.service';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Starship } from '../starship';

@Component({
  selector: 'app-starship-list',
  imports: [AsyncPipe],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.css'
})
export class StarshipListComponent {
  starshipsService = inject(StarshipService)

  starships = this.starshipsService._starships


  onSelectStarship(starShip: Starship) {
    this.starshipsService.selectedStarship(starShip)
  }
}
