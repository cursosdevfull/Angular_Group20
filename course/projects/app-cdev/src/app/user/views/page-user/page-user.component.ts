import { Component, inject } from '@angular/core';
import { ContainerComponent } from '../../../core/views/container/container.component';
import { TitleComponent } from '../../../core/views/title/title.component';
import { LayoutService } from '../../../core/services/layout.service';
import { MatButtonModule } from '@angular/material/button';
import { Metadata } from '../../../core/types/metadata.type';

@Component({
  selector: 'cdev-page-user',
  imports: [ContainerComponent, TitleComponent, MatButtonModule],
  templateUrl: './page-user.component.html',
  styleUrl: './page-user.component.scss'
})
export class PageUserComponent {
  layoutService = inject(LayoutService);

  metadata: Metadata = [
    { field: 'userId', label: 'User ID' },
    { field: 'name', label: 'Name' },
    { field: 'email', label: 'Email' },
    { field: 'role', label: 'Role' },
  ]

  data = [
    { userId: 1, name: 'John Doe', email: 'john.doe@email.com', role: 'admin' },
    { userId: 2, name: 'Jane Smith', email: 'jane.doe@email.com', role: 'user' },
    { userId: 3, name: 'Alice Johnson', email: 'alice.johnson', role: 'user' },
    { userId: 4, name: 'Bob Brown', email: 'bob.brown', role: 'user' },
    { userId: 5, name: 'Charlie Davis', email: 'charlie.davis', role: 'user' },
    { userId: 6, name: 'Diana Evans', email: 'diana.evans', role: 'user' },
    { userId: 7, name: 'Ethan Foster', email: 'ethan.foster', role: 'user' },
    { userId: 8, name: 'Fiona Green', email: 'fiona.green', role: 'user' },
    { userId: 9, name: 'George Harris', email: 'george.harris', role: 'user' },
    { userId: 10, name: 'Hannah Ivers', email: 'hannah.ivers', role: 'user' },
    { userId: 11, name: 'Ian Jones', email: 'ian.jones', role: 'user' },
    { userId: 12, name: 'Jack King', email: 'jack.king', role: 'user' },
    { userId: 13, name: 'Kathy Lewis', email: 'kathy.lewis', role: 'user' },
    { userId: 14, name: 'Liam Miller', email: 'liam.miller', role: 'user' },
    { userId: 15, name: 'Mia Nelson', email: 'mia.nelson', role: 'user' },
    { userId: 16, name: 'Noah OBrien', email: 'noah.obrien', role: 'user' },
    { userId: 17, name: 'Olivia Parker', email: 'olivia.parker', role: 'user' },
    { userId: 18, name: 'Paul Quinn', email: 'paul.quinn', role: 'user' },
    { userId: 19, name: 'Quinn Roberts', email: 'quinn.roberts', role: 'user' },
    { userId: 20, name: 'Rachel Smith', email: 'rachel.smith', role: 'user' },
    { userId: 21, name: 'Sam Taylor', email: 'sam.taylor', role: 'user' },
    { userId: 22, name: 'Tina Underwood', email: 'tina.underwood', role: 'user' },
    { userId: 23, name: 'Uma Vance', email: 'uma.vance', role: 'user' },
    { userId: 24, name: 'Victor White', email: 'victor.white', role: 'user' },
    { userId: 25, name: 'Wendy Young', email: 'wendy.young', role: 'user' },
    { userId: 26, name: 'Xander Zane', email: 'xander.zane', role: 'user' },
    { userId: 27, name: 'Yara Adams', email: 'yara.adams', role: 'user' },
    { userId: 28, name: 'Zoe Baker', email: 'zoe.baker', role: 'user' },
    { userId: 29, name: 'Aaron Carter', email: 'aaron.carter', role: 'user' },
    { userId: 30, name: 'Bella Diaz', email: 'bella.diaz', role: 'user' },
    { userId: 31, name: 'Carter Edwards', email: 'carter.edwards', role: 'user' },
    { userId: 32, name: 'Daisy Fisher', email: 'daisy.fisher', role: 'user' },
    { userId: 33, name: 'Eli Garcia', email: 'eli.garcia', role: 'user' },

  ]

  constructor() {
    this.layoutService.layout.set({ header: true, menu: true });
  }
}
