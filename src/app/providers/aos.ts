import * as animateOnScroll from 'aos';
import { InjectionToken } from '@angular/core';

export const aos = animateOnScroll;
export const AosToken = new InjectionToken('AOS');