import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-basic',
  imports: [],
  templateUrl: './signals-basic.component.html',
  styleUrl: './signals-basic.component.css'
})
export class SignalsBasicComponent {
  message = ""

  operator1 = signal<number>(20);
  operator2 = signal<number>(15);

  users = signal<string[]>(["John", "Doe", "Jane", "Doe"]);
  additionalUsers = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Jack", "Kate", "Liam", "Mia", "Nina", "Oliver", "Pam", "Quinn", "Riley", "Sara", "Tom", "Uma", "Vera", "Will", "Xander", "Yara", "Zoe"];

  sum = computed(() => this.operator1() + this.operator2());

  constructor() {
    setInterval(() => {
      this.operator2.update((currentValue) => currentValue + 8)
    }, 1200);

    setInterval(() => {
      this.operator1.set(Math.floor(Math.random() * 500 + 1));
    }, 1000);

    effect(() => {
      if (this.operator1() > this.operator2()) {
        this.message = "Operator 1 >> Operator 2";
      } else if (this.operator1() < this.operator2()) {
        this.message = "Operator 1 << Operator 2";
      } else {
        this.message = "Operator 1 == Operator 2";
      }
    })

    setInterval(() => {
      this.users.update(currentValue => [...currentValue, this.additionalUsers[Math.floor(Math.random() * this.additionalUsers.length)]]);
    }, 1000);

  }
}
