import { Component } from '@angular/core';
interface MyProjects{
   image: any;
   github:string;
   liveDemo:string;
   discription:string;

}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  projects: MyProjects[] = [
    {
      image: '../../../../assets/images/recipeProject.png',
      github: 'https://github.com/Jmike-dev/hidden_gems',
      liveDemo: 'https://food-website-2cb33.web.app/home',
      discription: 'something',
    },
  ];
}
