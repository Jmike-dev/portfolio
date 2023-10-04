import { Component } from '@angular/core';
import { Projects } from 'src/techObject';
import { MyProjects } from 'src/inerface/ProjectInterface';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {

  projects: MyProjects[] = Projects
}
