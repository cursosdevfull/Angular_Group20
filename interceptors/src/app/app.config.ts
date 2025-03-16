import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authenticationInterceptor } from './interceptors/authentication.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { loggingInterceptor } from './interceptors/logging.interceptor';
import { cacheInterceptor } from './interceptors/cache.interceptor';
import { headersInterceptor } from './interceptors/headers.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { timeoutInterceptor } from './interceptors/timeout.interceptor';
import { baseUrlInterceptor } from './interceptors/base-url.interceptor';
import { retryInterceptor } from './interceptors/retry.interceptor';
import { offlineModeInterceptor } from './interceptors/offline-mode.interceptor';
import { jwtRefreshTokenInterceptor } from './interceptors/jwt-refresh-token.interceptor';
import { requestTimingInterceptor } from './interceptors/request-timing.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authenticationInterceptor,
        errorInterceptor,
        loggingInterceptor,
        cacheInterceptor,
        headersInterceptor,
        loadingInterceptor,
        timeoutInterceptor,
        baseUrlInterceptor,
        retryInterceptor,
        offlineModeInterceptor,
        requestTimingInterceptor
        //jwtRefreshTokenInterceptor
      ])
    )]
};
