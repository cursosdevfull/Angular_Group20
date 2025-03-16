import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interceptors';

  http = inject(HttpClient)

  constructor() {
    //this.getData()
    this.title = 'interceptors: ' + environment.apiUrl
  }

  getData() {
    this.http.get("/posts").subscribe(console.log)
  }
}
