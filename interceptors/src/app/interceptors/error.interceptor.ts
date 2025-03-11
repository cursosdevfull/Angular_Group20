import { HttpErrorResponse, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { catchError, throwError } from "rxjs";

export const errorInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    return next(request).pipe(
        catchError((error: HttpErrorResponse) => {
            console.log("Error intercepted", error.message)
            console.error(error)
            return throwError(() => error)
        })
    )
}