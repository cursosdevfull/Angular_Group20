import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { retry } from "rxjs";

export const retryInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const maxRetries = 3

    return next(request).pipe(
        retry(maxRetries)
    )
}