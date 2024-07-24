import {Component} from '@angular/core';
import {faBars, faLaptop, faPerson} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {RouterLink} from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    standalone: true,
    imports: [RouterLink, FaIconComponent],
})
export class NavbarComponent {
    faLaptop = faLaptop;
    faHome = faHome;
    faPerson = faPerson;
    faBars = faBars;
}
