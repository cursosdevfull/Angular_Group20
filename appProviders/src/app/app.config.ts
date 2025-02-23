import { ApplicationConfig, Inject, Injectable, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export class MathOperation {
  add(x: number, y: number): number {
    return x + y;
  }

  subtract(x: number, y: number): number {
    return x - y;
  }

  multiply(x: number, y: number): number {
    return x * y;
  }

  divide(x: number, y: number): number {
    return x / y;
  }
}

export class HourWorld {
  getHour(): number {
    return new Date().getHours();
  }
}

export class HourService {
  private environment: string;

  constructor(environment: string) {
    this.environment = environment;
  }

  getHour(): number {
    if (this.environment === "production") {
      console.log("Getting hour in production");
    }

    return new Date().getHours();
  }
}

export class MockProvideService { }

export const MyInjectToken = new InjectionToken<string>("It's a token class");

export class Taxes {
  public tax: number = 18;

  calculate(amount: number): number {
    return amount * this.tax / 100;
  }
}

@Injectable({
  providedIn: "root"
})
export class TaxesAdvanced {
  public tax: number = 18;

  constructor(private mathOperation: MathOperation) { }

  private calculateMultiply(operator1: number, operator2: number): number {
    return this.mathOperation.multiply(operator1, operator2);
  }

  calculate(amount: number): number {
    return this.calculateMultiply(amount, this.tax) / 100;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: "environment",
      useValue: "production"
    },

    {
      provide: "mathOperation",
      useClass: MathOperation
    },
    {
      provide: "hourWorld",
      useFactory: () => {
        return new HourWorld();
      }
    },
    {
      provide: "hourService",
      useFactory: (environment: string) => {
        return new HourService(environment);
      },
      deps: ["environment"]
    },
    {
      provide: MockProvideService,
      useClass: MathOperation
    },
    {
      provide: MyInjectToken,
      useClass: MathOperation
    },

    {
      provide: MathOperation,
      useClass: MathOperation
    },

    Taxes,
    //TaxesAdvanced,
    /*{
      provide: Taxes,
      useClass: Taxes
    },*/


    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};


/* var environment = "production";

class MyService {
  private environment: string;

  constructor(environment: string) {
    this.environment = environment;
  }

  add(x: number, y: number): number {
    if (this.environment === "production") {
      console.log("Adding " + x + " and " + y, "in production", "result is", x + y);
    }

    return x + y;
  }
}

class HourService {
  private environment: string;

  constructor(environment: string) {
    this.environment = environment;
  }

  getHour(): number {
    if (this.environment === "production") {
      console.log("Getting hour in production");
    }

    return new Date().getHours();
  }
}

const myService = new MyService(environment);
myService.add(1, 2);

const hourService = new HourService(environment);
hourService.getHour(); */

///////////////////////////////////////////


/* var mathOperation = new MathOperation();


class HighElementary {
  private mathOperation: MathOperation;

  constructor(mathOperation: MathOperation) {
    this.mathOperation = mathOperation;
  }

  calculateSum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => this.mathOperation.add(acc, val), 0);
  }
}


class College {
  private mathOperation: MathOperation;

  constructor(mathOperation: MathOperation) {
    this.mathOperation = mathOperation;
  }

  private calculateSum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => this.mathOperation.add(acc, val), 0);
  }

  calculateAverage(...numbers: number[]): number {
    return this.calculateSum(...numbers) / numbers.length;
  }
}


const highElementary = new HighElementary(mathOperation);
console.log(highElementary.calculateSum(1, 2, 3, 4, 5));

const college = new College(mathOperation);
console.log(college.calculateAverage(1, 2, 3, 4, 5)); */


