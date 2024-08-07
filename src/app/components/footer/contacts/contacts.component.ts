import {Component, HostBinding} from '@angular/core';
import {faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {fadeInAnimation} from 'src/assets/shared-animations/animations';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    animations: [fadeInAnimation],
    standalone: true,
    imports: [FaIconComponent, ReactiveFormsModule],
})
export class ContactsComponent {
    @HostBinding('@fadeInAnimation') fadeInAnimation = true;

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
    gmail = 'gmikekamau@gmail.com';

    constructor(private fb: FormBuilder, private toastr: ToastrService) {}

    async sendEmail(e: Event) {
        e.preventDefault();
        if (
            !this.form.value.client_name ||
            !this.form.value.client_email ||
            !this.form.value.client_message
        ) {
            // alert('form must be filled');
            this.toastr.error('form must be filled');
            this.form.reset();
        } else {
            emailjs.init('B9WislRSQ5ZFNEmb5');
            let response = await emailjs.send(
                'service_5ptkduo',
                'template_3hgqo5t',
                {
                    client_name: this.form.value.client_name,
                    client_email: this.form.value.client_email,
                    client_message: this.form.value.client_message,
                }
            );
            // alert('email has been sent successfully');
            this.toastr.success('email sent');
        }
        this.form.reset();
    }
}
