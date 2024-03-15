import { Component, HostBinding } from '@angular/core';
import { faBars, faLaptop, faPerson } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { cardYanimation } from 'src/app/shared-animations/animations';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  faLaptop = faLaptop;
  faHome = faHome;
  faPerson = faPerson;
  faBars = faBars;
  
}
