import {Component} from '@angular/core';
import {
    cardYanimation,
    fadeInAnimation,
} from 'src/assets/shared-animations/animations';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    animations: [fadeInAnimation, cardYanimation],
})
export class AboutComponent {}
