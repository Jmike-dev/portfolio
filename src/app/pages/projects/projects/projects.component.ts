import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

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
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure inventore eum ex nemo tempora dignissimos maxime ea consequuntur molestiae omnis.',
      title: 'recipe website',
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
