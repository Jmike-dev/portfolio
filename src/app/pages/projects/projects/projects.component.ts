import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { cardXanimation, cardYanimation, fadeInAnimation } from 'src/app/shared-animations/animations';

interface MyProjects{
   image: any;
   github:string;
   liveDemo:string;
   discription:string;
   title:string;

}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  animations:[fadeInAnimation,cardXanimation,cardYanimation]
})
export class ProjectsComponent {
  faGithub = faGithub;
  faGlobe = faGlobe;

  projects: MyProjects[] = [
    {
      image: '../../../../assets/images/recipeProject.png',
      github: 'https://github.com/Jmike-dev/hidden_gems',
      liveDemo: 'https://food-website-2cb33.web.app/home',
      discription:
        'The app was build with Angular, deployed to Firebase and fetches data from the spooncular API.In this app you can easily search for a meal and their recipes.  ',
      title: 'food website',
    },
    //     {
    //   image: '../../../../assets/images/recipeProject.png',
    //   github: 'https://github.com/Jmike-dev/hidden_gems',
    //   liveDemo: 'https://food-website-2cb33.web.app/home',
    //   discription:
    //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure inventore eum ex nemo tempora dignissimos maxime ea consequuntur molestiae omnis.',
    //   title: 'recipe website',
    // },
  ];
}
