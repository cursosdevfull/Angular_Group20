import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptors';

  http = inject(HttpClient)

  constructor() {
    this.getData()
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(console.log)
  }
}
