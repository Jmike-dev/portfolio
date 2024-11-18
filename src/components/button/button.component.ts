import {Component, EventEmitter, Input, output, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    standalone: true,
    imports: [],
    templateUrl: './button.component.html',
})
export class ButtonComponent {
    @Input() buttonText = '';

    buttonOnClick = output();
    buttonFunction() {
        this.buttonOnClick.emit();
    }
}
