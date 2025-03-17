import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthService } from './auth/services/auth.service';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';

const providers = [
  AuthService
]

const otherProviders = [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  provideHttpClient(withFetch(), withInterceptors([loaderInterceptor]))
]

export const appConfig: ApplicationConfig = {
  providers: [...otherProviders, ...providers]
};
