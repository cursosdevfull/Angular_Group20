import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { retry, throwError } from "rxjs";

export const offlineModeInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    if (!navigator.onLine) {
        console.log("Device is offline. Request cannot be sent: " + request.url);
        return throwError(() => new Error("Device is offline"));
    }

    return next(request);
}