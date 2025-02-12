import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'cdev-user',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent {
  //@Input() username: string = '';
  name = input<string>();
  lastname = input<string>();
  age = input<number>();
  lastLogin = input<Date>();

  constructor() {}
}
