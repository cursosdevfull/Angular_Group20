import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  showLoading() {
    console.log('Loading...');
  }

  hideLoading() {
    console.log('Loading hidden');
  }
}
