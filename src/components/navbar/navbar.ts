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
        const sidenavWidth = "250px";
        
        if (sidenav) {
            if (sidenav.style.width == sidenavWidth) {
                sidenav.style.width = "0px";
            } else {
                sidenav.style.width = sidenavWidth;
            }
        }
    }
}
