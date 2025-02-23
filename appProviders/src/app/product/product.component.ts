import { Component, Inject } from '@angular/core';
import { Taxes } from '../app.config';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(@Inject(Taxes) taxes: Taxes) {
    console.log(`calculate tax 4000 with ${taxes.tax}% tax`, taxes.calculate(4000));
  }
}
