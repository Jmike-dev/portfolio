import {Component} from '@angular/core';
import {
    cardXanimation,
    cardYanimation,
} from 'src/assets/shared-animations/animations';
import {TechStack, Technologies} from 'src/techObject';

@Component({
    selector: 'app-technology-table',
    templateUrl: './technology-table.component.html',
    animations: [cardXanimation, cardYanimation],
})
export class TechnologyTableComponent {
    techStacks: Technologies[] = TechStack;
}
