import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Inject, inject, Input, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]'
})
export class ScrollAnimation implements OnInit, OnDestroy {
    @Input() animationClass = "opacity-100 translate-y-0 scale-100";
    @Input() hiddenClass = "opacity-0 translate-y-10 scale-95";
    @Input() threshold = 0.1;
    @Input() rootMargin = "0px";

    private observer: IntersectionObserver | null = null;
    private isBrowser: boolean;
    
    constructor(private el: ElementRef, private renderer: Renderer2, 
        @Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    ngOnInit(): void {
        if (!this.isBrowser) {
            return;
        }

        // Add initial hidden classes and transition utilities
        const classes = this.hiddenClass.split(" ");
        classes.forEach(c => c.trim() && this.renderer.addClass(this.el.nativeElement, c));

        this.renderer.addClass(this.el.nativeElement, 'transition-all');
        this.renderer.addClass(this.el.nativeElement, 'duration-1000');
        this.renderer.addClass(this.el.nativeElement, 'ease-out');

        // Create Intersection Observer
        this.observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Remove hidden classes
                this.hiddenClass.split(" ").forEach(c => {
                    if (c.trim()) {
                        this.renderer.removeClass(this.el.nativeElement, c);
                    }
                });

                // Add animation classes
                this.animationClass.split(" ").forEach(c => {
                    if (c.trim()) {
                        this.renderer.addClass(this.el.nativeElement, c);
                    }
                });

                // Stop observing once animated
                this.observer?.unobserve(this.el.nativeElement);
            }
        }, {
            threshold: this.threshold,
            rootMargin: this.rootMargin
        });

        this.observer.observe(this.el.nativeElement);
    }
    
    ngOnDestroy(): void {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}