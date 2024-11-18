import {Component} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {
    cardXanimation,
    cardYanimation,
    fadeInAnimation,
} from 'src/assets/shared-animations/animations';
import {ContactsComponent} from '../../../layouts/footer/contacts/contacts.component';
import {NgFor} from '@angular/common';
import { projects } from 'src/service/projects/projectObject';
import { ProjectModal } from 'src/service/projects/index.modal';


@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    animations: [fadeInAnimation, cardXanimation, cardYanimation],
    standalone: true,
    imports: [NgFor, ContactsComponent],
})
export class ProjectsComponent {
    faGithub = faGithub;
    faGlobe = faGlobe;

    projects: ProjectModal[] = projects
}
