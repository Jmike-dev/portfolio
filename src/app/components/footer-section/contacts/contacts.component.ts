import { Component } from '@angular/core';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  // creating the form porperties
  form: FormGroup = this.fb.group({
    client_name: '',
    client_email: '',
    client_message: '',
  });

  constructor(private fb: FormBuilder) {}

  async sendEmail(e: Event) {
    if (
      !this.form.value.client_name ||
      !this.form.value.client_email ||
      !this.form.value.client_message
      ) {
        e.preventDefault();
        alert('form must be filled');
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
  // public sendEmail(e: Event) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       'service_5ptkduo',
  //       'template_3hgqo5t',
  //       e.target as HTMLFormElement,
  //       'B9WislRSQ5ZFNEmb5'
  //     )
  //     .then(
  //       (result: EmailJSResponseStatus) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }
}
