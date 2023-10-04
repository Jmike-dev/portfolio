import { Component } from '@angular/core';
import { TechStack } from 'src/techObject';
import { Technologies } from 'src/interface/Technologies';

@Component({
  selector: 'app-technology-table',
  templateUrl: './technology-table.component.html'
})
export class TechnologyTableComponent {
 techStacks:Technologies[] = TechStack;
}
