import { Component } from '@angular/core';
import { FormService } from 'src/app/components/pop-ups/service/form.service';
import { faX } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  faX = faX;
  constructor(public onClick: FormService) {}
}
