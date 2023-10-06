import { Component, HostBinding } from '@angular/core';
import { fadeInAnimation } from 'src/app/shared-animations/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  animations: [fadeInAnimation],
})
export class AboutComponent {
  @HostBinding('@fadeInAnimation') fadeInAnimation = true;
}
