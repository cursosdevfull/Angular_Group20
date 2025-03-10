import { Component, computed, inject, model, effect } from '@angular/core';
import { StarshipService } from '../starship.service';
import { Starship, StarshipResponse } from '../starship';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-starship-list',
  imports: [FormsModule],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.css'
})
export class StarshipListComponent {
  starshipsService = inject(StarshipService)


  starships = computed(() => (this.starshipsService.starships.value() as StarshipResponse).results.map(s => ({ ...s, cost_in_credits: isNaN(Number(s.cost_in_credits)) ? String(Math.random() * 100000) : s.cost_in_credits })))

  onSelectStarship(starShip: Starship) {
    this.starshipsService.selectedStarship.set(starShip)
  }

  onSearch(evt: any) {
    this.starshipsService.search.set(evt.target.value)
  }
}
