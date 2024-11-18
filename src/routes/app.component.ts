import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from 'src/layouts/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [NavbarComponent, RouterOutlet],
})
export class AppComponent {
    title = 'portfolio';
}