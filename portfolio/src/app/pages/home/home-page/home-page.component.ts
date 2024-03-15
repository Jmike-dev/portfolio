import { Component, HostBinding } from '@angular/core';
import { cardXanimation, cardYanimation, fadeInAnimation } from 'src/app/shared-animations/animations';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  animations:[fadeInAnimation,cardXanimation,cardYanimation]
})
export class HomePageComponent {
}
