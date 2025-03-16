import { HttpClient, HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { of, retry, throwError, catchError, tap, switchMap } from "rxjs";


function getRequest(url: string): HttpRequest<unknown> {
    return new HttpRequest("GET", "https://api.example.com/data")
}

function makeRequest(url: string, headers: Record<string, any>) {
    const http = inject(HttpClient);

    if (headers.hasOwnProperty("Authorization") && headers["Authorization"] !== null) {
        return http.get(url);
    } else {
        return throwError(() => new Error("No Authorization header"));
    }
}

function getNewAccessToken() {
    return of("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
}

export const jwtRefreshTokenInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {

    return next(getRequest(request.url))
        .pipe(
            catchError((error) => {
                return getNewAccessToken().pipe(
                    tap((newAccessToken) => console.log("New access token: " + newAccessToken)),
                    switchMap((value) => {
                        console.log("value", value)
                        return next(getRequest(request.url).clone({
                            setHeaders: {
                                Authorization: `Bearer ${value}`
                            }
                        }))
                    })
                )
            })
        )
}