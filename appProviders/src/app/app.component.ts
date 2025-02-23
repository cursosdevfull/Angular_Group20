import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HourService, HourWorld, MathOperation, MockProvideService, MyInjectToken, Taxes, TaxesAdvanced } from './app.config';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'appProviders';

  constructor(
    @Inject("environment") env: string,
    @Inject("mathOperation") mathOperation: MathOperation,
    @Inject("hourService") hourWorld: HourWorld,
    @Inject("hourService") hourService: HourService,
    @Inject(MockProvideService) service: MathOperation,
    @Inject(MyInjectToken) token: MathOperation,
    @Inject(MathOperation) math: MathOperation,
    //@Inject(Taxes) taxes: Taxes
    taxes: Taxes,
    taxesAdvanced: TaxesAdvanced
  ) {

    console.log("Environment is", env);
    console.log("Adding 2 and 3", mathOperation.add(2, 3));
    console.log("Subtracting 2 and 3", mathOperation.subtract(2, 3));
    console.log("Multiplying 2 and 3", mathOperation.multiply(2, 3));
    console.log("Dividing 2 and 3", mathOperation.divide(2, 3));
    console.log("Current world hour is", hourWorld.getHour());
    console.log("Current service hour is", hourService.getHour());
    console.log("Math Service 4 + 23", service.add(4, 23));

    console.log("add 4 + 23", token.add(4, 23));
    console.log("subtract 4 - 23", token.subtract(4, 23));
    console.log("multiply 4 * 23", token.multiply(4, 23));
    console.log("divide 4 / 23", token.divide(4, 23));

    console.log("add 4 + 23", math.add(4, 23));
    console.log("subtract 4 - 23", math.subtract(4, 23));
    console.log("multiply 4 * 23", math.multiply(4, 23));
    console.log("divide 4 / 23", math.divide(4, 23));

    taxes.tax = 45;

    console.log(`calculate tax 1000 with ${taxes.tax}% tax`, taxes.calculate(1000));

    console.log(`calculate tax 1000 with ${taxesAdvanced.tax}% tax`, taxesAdvanced.calculate(1000));

  }
}
