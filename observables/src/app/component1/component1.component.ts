import { Component } from '@angular/core';
import { debounceTime, fromEvent, interval, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-component1',
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {
  //private subscription: Subscription;
  private subject = new Subject<void>();

  constructor() {
    /*interval(1000)
      .pipe(takeUntil(this.subject))
      .subscribe({
        next: (data: number) => console.log(data)
      })*/

    /*this.subscription = interval(1000).subscribe({
      next: (data: number) => console.log(data)
    })*/
  }

  ngAfterViewInit() {
    const btn = document.querySelector('button') as HTMLButtonElement

    fromEvent(btn, "click").pipe(debounceTime(2000)).subscribe({
      next: (data: any) => console.log(data)
    })

    const input = document.querySelector('input') as HTMLInputElement

    fromEvent(input, "keyup").pipe(debounceTime(2000)).subscribe({
      next: (data: any) => console.log(data)
    })
  }

  ngOnDestroy() {
    this.subject.next()
    this.subject.unsubscribe()

    //this.subscription.unsubscribe()
  }
}
