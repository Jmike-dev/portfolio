import {Component, HostBinding} from '@angular/core';
import {
    cardXanimation,
    cardYanimation,
    fadeInAnimation,
} from 'src/assets/shared-animations/animations';
import {ContactsComponent} from '../../../layouts/footer/contacts/contacts.component';
import {TechnologyTableComponent} from '../technology-table/technology-table.component';
import {RouterLink} from '@angular/router';
@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    animations: [fadeInAnimation, cardXanimation, cardYanimation],
    standalone: true,
    imports: [RouterLink, TechnologyTableComponent, ContactsComponent],
})
export class HomePageComponent {}
