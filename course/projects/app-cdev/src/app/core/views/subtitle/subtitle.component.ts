import { Component, input } from '@angular/core';

@Component({
  selector: 'cdev-subtitle',
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.scss'
})
export class SubtitleComponent {
  subtitle = input<string>('');
}
