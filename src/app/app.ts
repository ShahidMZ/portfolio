import { Component, signal } from '@angular/core';
import { Navbar } from '../components/navbar/navbar';
import { Intro } from '../components/intro/intro';
import { Experience } from '../components/experience/experience';
import { Skills } from '../components/skills/skills';
import { Contact } from '../components/contact/contact';

@Component({
    selector: 'app-root',
    imports: [Navbar, Intro, Experience, Skills, Contact],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected readonly title = signal("SHAHIDMZUBAIR");
    protected readonly year = new Date().getFullYear();

    protected readonly githubURL = signal("https://github.com/ShahidMZ");
    protected readonly stackOverflowURL = signal("https://stackoverflow.com/users/2946161/shahid-m-zubair");
    protected readonly linkedInURL = signal("https://www.linkedin.com/in/shahidmzubair");
}
