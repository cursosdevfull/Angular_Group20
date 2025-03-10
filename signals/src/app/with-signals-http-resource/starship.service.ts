import { HttpClient, httpResource, HttpResourceRef } from '@angular/common/http';
import { inject, Injectable, ResourceRef, signal } from '@angular/core';
import { Starship, StarshipResponse } from './starship';
import { map } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  endPointUrl = "https://swapi.dev/api/starships"

  starships: HttpResourceRef<StarshipResponse | undefined> = httpResource<StarshipResponse>(() => `${this.endPointUrl}?search=${this.search()}`)

  selectedStarship = signal<Starship | undefined>(undefined)

  search = signal<string>("")
}
