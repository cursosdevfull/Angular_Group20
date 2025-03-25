import { Component, inject, input, Input } from '@angular/core';
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
  /*@Input() title: string = '';
  @Input() icon: string = '';*/

  //title = input.required<string>();
  //icon = input.required<string>(); // or use @Input() icon: string = ''; if you prefer to use the decorator
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
