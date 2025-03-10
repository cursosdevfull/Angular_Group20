import { Component, inject } from '@angular/core';
import { StarshipService } from '../starship.service';
import { map } from 'rxjs';
import { AsyncPipe, DecimalPipe, JsonPipe } from '@angular/common';
import { Starship } from '../starship';

@Component({
  selector: 'app-starship-detail',
  imports: [AsyncPipe, DecimalPipe],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.css'
})
export class StarshipDetailComponent {
  starshipsService = inject(StarshipService)

  infoStarship = this.starshipsService.starshipSelected

  getName(starship: Starship | null) {
    if (starship) {
      return starship.name
    }
    return ""
  }
}
