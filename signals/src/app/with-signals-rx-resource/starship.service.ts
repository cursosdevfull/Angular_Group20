import { HttpClient } from '@angular/common/http';
import { inject, Injectable, ResourceRef, signal } from '@angular/core';
import { Starship, StarshipResponse } from './starship';
import { map } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  endPointUrl = "https://swapi.dev/api/starships"

  http = inject(HttpClient)

  starships: ResourceRef<any> = rxResource({
    loader: () => this.http.get<StarshipResponse>(this.endPointUrl)
      .pipe(
        map(data =>
          data.results.map((s: Starship) =>
          ({
            ...s, cost_in_credits: isNaN(Number(s.cost_in_credits)) ?
              String(Math.random() * 100000)
              : s.cost_in_credits
          })
          )
        )
      )

  })

  private _starships = this.http.get<StarshipResponse>(this.endPointUrl).pipe(
    map(data => data.results.map(s => ({ ...s, cost_in_credits: isNaN(Number(s.cost_in_credits)) ? String(Math.random() * 100000) : s.cost_in_credits })))
  )

  //starships = toSignal(this._starships, { initialValue: [] as Starship[] })
  selectedStarship = signal<Starship | undefined>(undefined)
}
