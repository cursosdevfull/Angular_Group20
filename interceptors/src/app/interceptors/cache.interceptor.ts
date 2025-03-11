import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { of, tap } from "rxjs";
import { CacheService } from "../cache.service";

export const cacheInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const cacheService = inject(CacheService)

    if (request.method !== "GET") {
        return next(request)
    }

    const cachedResponse = cacheService.cache.get(request.url)

    if (cachedResponse) {
        console.log("Cache hit")
        return of(cachedResponse)
    }

    return next(request).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
                console.log("Cache miss")
                cacheService.cache.set(request.url, evt)
            }
        })
    )
}