import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { environment } from "../../environments/environment";

export const baseUrlInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const baseUrl = environment.apiUrl;

    const clonedRequest = request.clone({
        url: `${baseUrl}${request.url}`
    });

    return next(clonedRequest)
}