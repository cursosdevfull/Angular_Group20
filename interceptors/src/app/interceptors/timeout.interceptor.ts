import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { catchError, delay, throwError, timeout } from "rxjs";

export const timeoutInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const timeoutDuration = 10 * 1000

    return next(request).pipe(
        //delay(12000),
        timeout(timeoutDuration),
        catchError((error) => {
            if (error.name === "TimeoutError") {
                console.log("Request timed out")
                return throwError(() => new Error("Request timed out"))
            }
            return throwError(() => error)
        })
    )
}