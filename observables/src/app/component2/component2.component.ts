import { Component } from '@angular/core';
import { interval, map, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {
  private subscription: Subscription;

  constructor() {
    this.subscription = interval(8000)
      .pipe(
        switchMap(() => interval(1000).pipe(map(value => value * 4)))
      )
      .subscribe({
        next: (data: number) => console.log(data)
      })

    /*     this.subscription = interval(1000)
          .pipe(map(value => value * 4))
          .subscribe({
            next: (data: number) => console.log(data)
          }) */
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
