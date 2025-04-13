import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeService } from '../../services/theme.service';
import { ThemeModeService } from '../../services/theme-mode.service';
import { TitleCasePipe } from '@angular/common';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'cdev-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService = inject(ThemeService)
  themeModeService = inject(ThemeModeService)
  authService = inject(AuthService)
}
