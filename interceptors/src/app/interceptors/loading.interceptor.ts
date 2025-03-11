import { HttpHandlerFn, HttpHeaders, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { LoadingService } from "../loading.service";
import { finalize } from "rxjs";

export const loadingInterceptor: HttpInterceptorFn = (request: HttpRequest<unknown>, next: HttpHandlerFn) => {
    const loadingService = inject(LoadingService)

    loadingService.showLoading()

    return next(request).pipe(
        finalize(() => {
            loadingService.hideLoading()
        })
    )
}