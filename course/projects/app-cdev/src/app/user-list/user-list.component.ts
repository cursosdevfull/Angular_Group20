import { Component } from '@angular/core';

import { UserComponent } from '../user/user.component';

type User = {
  name: string;
  lastname: string;
  age: number;
  lastLogin: Date;
};

export type Users = User[];

@Component({
  selector: 'cdev-user-list',
  imports: [UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  userList: Users = [
    { name: 'Juan', lastname: 'Pérez', age: 30, lastLogin: new Date() },
    { name: 'Claudia', lastname: 'González', age: 25, lastLogin: new Date() },
    { name: 'Marissa', lastname: 'López', age: 40, lastLogin: new Date() },
    { name: 'Tomás', lastname: 'Rodríguez', age: 35, lastLogin: new Date() },
    { name: 'Irma', lastname: 'Sánchez', age: 28, lastLogin: new Date() },
    { name: 'Javier', lastname: 'Ramírez', age: 42, lastLogin: new Date() },
    { name: 'Rosa', lastname: 'Torres', age: 22, lastLogin: new Date() },
    { name: 'Jimena', lastname: 'Díaz', age: 31, lastLogin: new Date() },
  ];
}
