import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { DataService } from './providers/dataService/data.service';
import { TranslateService } from './providers/translate/translate.service';
import { TRANSLATION_PROVIDERS } from './providers/translate/translation';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(ScrollToModule.forRoot()),
    DataService,
    TranslateService,
    TRANSLATION_PROVIDERS
  ]
};
