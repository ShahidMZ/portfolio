import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css',
})
export class Navbar {
    isScrolled = false;

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.isScrolled = window.scrollY > 50;
    }

    toggleDrawer() {
        const sidenav = document.getElementById("mySidenav");
        
        if (sidenav) {
            if (sidenav.style.width == "250px") {
                sidenav.style.width = "0px";
            } else {
                sidenav.style.width = "250px";
            }
        }
    }
}
