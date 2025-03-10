import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Starship, StarshipResponse } from './starship';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  endPointUrl = "https://swapi.dev/api/starships"

  http = inject(HttpClient)

  _starships = this.http.get<StarshipResponse>(this.endPointUrl).pipe(
    map(data => data.results.map(s => ({ ...s, cost_in_credits: isNaN(Number(s.cost_in_credits)) ? String(Math.random() * 100000) : s.cost_in_credits })))
  )
  private starshipSelectedSubject = new BehaviorSubject<Starship | null>(null)
  starshipSelected = this.starshipSelectedSubject.asObservable()

  selectedStarship(starship: Starship) {
    this.starshipSelectedSubject.next(starship)
  }
}
