import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './auth/services/auth.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

const providers = [
  AuthService
]

const otherProviders = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(withFetch())
]

export const appConfig: ApplicationConfig = {
  providers: [...otherProviders, ...providers]
};
