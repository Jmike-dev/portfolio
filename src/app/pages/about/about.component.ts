import {Component} from '@angular/core';
import {
    cardYanimation,
    fadeInAnimation,
} from 'src/assets/shared-animations/animations';
import {ContactsComponent} from '../../components/footer/contacts/contacts.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    animations: [fadeInAnimation, cardYanimation],
    standalone: true,
    imports: [ContactsComponent],
})
export class AboutComponent {}
