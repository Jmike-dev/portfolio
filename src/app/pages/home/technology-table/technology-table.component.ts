import { Component } from '@angular/core';
import { TechStack, Technologies } from 'src/techObject';

@Component({
  selector: 'app-technology-table',
  templateUrl: './technology-table.component.html',
})
export class TechnologyTableComponent {
  techStacks: Technologies[] = TechStack;
}
