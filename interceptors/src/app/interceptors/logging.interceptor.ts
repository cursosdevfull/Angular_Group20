import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { tap } from "rxjs";

export const loggingInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    return next(request).pipe(
        tap(evt => {
            if (evt instanceof HttpResponse) {
                console.log("HTTP Response intercepted", evt)
            }
        })
    )
}