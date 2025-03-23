import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cdev-menu',
  imports: [RouterLink, MatListModule, MatIconModule, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  menuService = inject(MenuService)

  items = this.menuService.items
}
