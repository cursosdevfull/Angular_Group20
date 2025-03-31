import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'cdev-title',
  imports: [MatIconModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  title = ""
  icon = ""

  menuService = inject(MenuService);
  activatedRoute = inject(ActivatedRoute);

  constructor() {
    const path = this.activatedRoute.snapshot.pathFromRoot.slice(1)
      .reduce((acc, curr) => {
        if (curr.routeConfig && curr.routeConfig.path) {
          acc += "/" + curr.routeConfig.path
        }
        return acc;
      }, "")

    const menuItem = this.menuService.getMenuItem(path);
    if (menuItem) {
      this.title = menuItem.title;
      this.icon = menuItem.icon;
    }


  }

}
