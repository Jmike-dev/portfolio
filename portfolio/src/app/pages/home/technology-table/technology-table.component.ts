import {Component} from '@angular/core';
import {
    cardXanimation,
    cardYanimation,
} from 'src/assets/shared-animations/animations';
import {TechStack, Technologies} from 'src/techObject';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-technology-table',
    templateUrl: './technology-table.component.html',
    animations: [cardXanimation, cardYanimation],
    standalone: true,
    imports: [NgFor, RouterLink],
})
export class TechnologyTableComponent {
    techStacks: Technologies[] = TechStack;
}
