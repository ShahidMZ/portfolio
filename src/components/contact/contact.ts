import { Component, signal } from '@angular/core';
import { ScrollAnimation } from '../../core/directives/scroll-animation';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    imports: [ScrollAnimation, FormsModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact {
    protected readonly emailID = signal("shahidmzubair@gmail.com");
    protected readonly address = signal("Chicago, IL");

    protected subject: string = "";
    protected message: string = "";

    sendEmail(): void {
        console.log("Sending email...");

        const mailtoLink = `mailto:shahidmzubair@gmail.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.message)}`;
        window.location.href = mailtoLink;
    }
}
