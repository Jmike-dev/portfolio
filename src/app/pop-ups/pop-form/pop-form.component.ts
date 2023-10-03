import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../service/form.service';
import { faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pop-form',
  templateUrl: './pop-form.component.html',
})
export class PopFormComponent {
  faX = faX;

  form: FormGroup = this.fb.group({
    client_name: '',
    client_email: '',
    client_message: '',
  });

  constructor(private fb: FormBuilder, public onClick: FormService) {}

  async sendEmail(e: Event) {
    e.preventDefault();
    if (
      !this.form.value.client_name ||
      !this.form.value.client_email ||
      !this.form.value.client_message
    ) {
      alert('form must be filled');
      this.form.reset();
    } else {
      emailjs.init('B9WislRSQ5ZFNEmb5');
      let response = await emailjs.send('service_5ptkduo', 'template_3hgqo5t', {
        client_name: this.form.value.client_name,
        client_email: this.form.value.client_email,
        client_message: this.form.value.client_message,
      });
      alert('email has been sent successfully');
    }
    this.form.reset();
  }
}
