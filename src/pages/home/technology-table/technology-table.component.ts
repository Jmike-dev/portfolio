import {Component} from '@angular/core';
import {
    cardXanimation,
    cardYanimation,
} from 'src/assets/shared-animations/animations';
import {TechStack, TechnologyModal} from 'src/service/technologies/techObject';
import {Router, RouterLink} from '@angular/router';
import {NgFor} from '@angular/common';
import {ButtonComponent} from 'src/components/button/button.component';

@Component({
    selector: 'app-technology-table',
    templateUrl: './technology-table.component.html',
    animations: [cardXanimation, cardYanimation],
    standalone: true,
    imports: [NgFor, RouterLink, ButtonComponent],
})
export class TechnologyTableComponent {
    constructor(private router: Router) {}
    techStacks: TechnologyModal[] = TechStack;
    projects = '/projects';
    ButtonText = 'My Projects';
    ProjectPage() {
        this.router.navigate(['/projects']);
    }
}
