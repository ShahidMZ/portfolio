import { Component } from '@angular/core';
import { ScrollAnimation } from '../../core/directives/scroll-animation';

@Component({
    selector: 'app-intro',
    imports: [ScrollAnimation],
    templateUrl: './intro.html',
    styleUrl: './intro.css',
})
export class Intro { }
