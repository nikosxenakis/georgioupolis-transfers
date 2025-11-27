import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Phrases, IPhrasesDictionary } from '../../providers/translate/phrases';

@Component({
  selector: 'georgioupolis-taxi-index-carousel',
  templateUrl: './index-carousel.component.html',
  styleUrls: ['./index-carousel.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class IndexCarouselComponent implements OnInit, OnDestroy {
  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  data: IPhrasesDictionary;
  currentSlide = 0;
  slides = [0, 1, 2, 3]; // 4 slides
  private autoPlayInterval: any;

  constructor(){
    this.data = Phrases.getPhrasesDictionary();
  }

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateCarousel();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateCarousel();
  }

  private updateCarousel() {
    if (this.carouselTrack) {
      const track = this.carouselTrack.nativeElement;
      track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}
