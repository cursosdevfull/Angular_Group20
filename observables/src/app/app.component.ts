import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'observables';

  constructor() {

    /*     const observable = new Observable((observer: Observer<string>) => {
          setTimeout(() => {
            observer.next("Alguien tocó la puerta y dejó un paquete");
          }, 2000);
    
          setTimeout(() => {
            observer.next("Alguien tocó la puerta y dejó otro paquete");
          }, 6000);
    
    
          setTimeout(() => {
            observer.complete();
          }, 7000);
    
          setTimeout(() => {
            observer.error("Alguien tocó la puerta y dejó un paquete bomba");
          }, 8000)
    
          setTimeout(() => {
            observer.next("Llegó el cartero");
          }, 10000)
        })
    
        const suscription: Subscription = observable.subscribe({
          next: (data: string) => console.log(data),
          error: (error: string) => console.log(error),
          complete: () => console.log("Proceso completado")
        }) */
  }
}
