import {Component} from '@angular/core';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import {
    cardXanimation,
    cardYanimation,
    fadeInAnimation,
} from 'src/assets/shared-animations/animations';
import { ContactsComponent } from '../../../components/footer/contacts/contacts.component';
import { NgFor } from '@angular/common';

interface MyProjects {
    image: any;
    github: string;
    liveDemo: string;
    discription: string;
    title: string;
}
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

    projects: MyProjects[] = [
        {
            image: '../../../../assets/images/recipeProject.png',
            github: 'https://github.com/Jmike-dev/hidden_gems.git',
            liveDemo: 'https://food-website-2cb33.web.app/home',
            discription:
                'The app was build with Angular, deployed to Firebase and fetches data from the spooncular API.In this app you can easily search for a meal and their recipes.  ',
            title: 'Food Website',
        },
        {
            image: '../../../../assets/images/project2.png',
            github: 'https://github.com/Jmike-dev/qr-code-generator',
            liveDemo: 'https://qr-code-generator-flax.vercel.app/',
            discription:
                'The app was build using using Angular and hosted in Versel. quick and easy way to create a QR Code for website links as well as phone numbers.  ',
            title: 'QR Code Generator',
        },
    ];
}
