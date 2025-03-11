import { HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from "@angular/common/http";

export const headersInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const headers = request.headers
        .set("Content-Type", "application/json")
        .set("X-API-KEY", "custom")

    const clonedRequest = request.clone({
        headers
    })

    return next(clonedRequest)
}