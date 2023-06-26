import { Component } from '@angular/core';
import { FormService } from 'src/app/components/pop-ups/service/form.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(public onClick: FormService) {}
}
