import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input() animationClass = 'fade-in';
  @Input() animationDelay = 0;
  @Input() animationDuration = 400;

  private observer?: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Set initial state
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform = this.getInitialTransform();
    this.el.nativeElement.style.transition = `all ${this.animationDuration}ms ease-in-out ${this.animationDelay}ms`;

    // Setup intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animate();
            this.hasAnimated = true;
          }
        });
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private getInitialTransform(): string {
    switch (this.animationClass) {
      case 'fade-in':
        return 'translateY(0)';
      case 'fade-up':
        return 'translateY(30px)';
      case 'fade-down':
        return 'translateY(-30px)';
      case 'fade-left':
        return 'translateX(30px)';
      case 'fade-right':
        return 'translateX(-30px)';
      case 'zoom-in':
        return 'scale(0.8)';
      default:
        return 'translateY(0)';
    }
  }

  private animate() {
    this.el.nativeElement.style.opacity = '1';
    this.el.nativeElement.style.transform = this.animationClass === 'zoom-in' ? 'scale(1)' : 'translate(0, 0)';
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
