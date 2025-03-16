import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";

export const requestTimingInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const startTime = Date.now();

    return next(request).pipe(
        tap(() => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            console.log(`Request to ${request.url} took ${duration}ms`);
        })
    )
}