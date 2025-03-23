import { Component, inject, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './core/views/header/header.component';
import { LayoutService } from './core/services/layout.service';
import { Layout } from './core/services/layout.type';
import { LoaderComponent } from './core/views/loader/loader.component';
import { LoaderService } from './core/services/loader.service';
import { MenuComponent } from './core/views/menu/menu.component';

@Component({
  selector: 'cdev-root',
  imports: [RouterOutlet, MatSidenavModule, HeaderComponent, LoaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  layoutService = inject(LayoutService)
  loaderService = inject(LoaderService)

  showLayout: WritableSignal<Layout> = this.layoutService.layout
  showLoader: WritableSignal<boolean> = this.loaderService.loader

}
