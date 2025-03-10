import { Component, computed, inject } from '@angular/core';
import { StarshipService } from '../starship.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-starship-detail',
  imports: [DecimalPipe],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.css'
})
export class StarshipDetailComponent {
  starshipsService = inject(StarshipService)

  starship = computed(() => this.starshipsService.selectedStarship())

}
