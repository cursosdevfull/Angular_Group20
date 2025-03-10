import { Component, computed, inject } from '@angular/core';
import { StarshipService } from '../starship.service';
import { Starship } from '../starship';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.css'
})
export class StarshipListComponent {
  starshipsService = inject(StarshipService)

  starships = computed(() => this.starshipsService.starships())

  onSelectStarship(starShip: Starship) {
    this.starshipsService.selectedStarship.set(starShip)
  }
}
