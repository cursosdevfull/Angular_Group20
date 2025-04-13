import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";
import { Router } from "@angular/router";
import * as jwt from "jwt-decode"

export type ResponseLogin = {
    status: number,
    token: string,
}

@Injectable()
export class AuthService {
    userLogged = signal<boolean>(false);
    router = inject(Router)

    userToken = signal<string | null>(null)

    payload = computed(() => {
        const token = this.userToken()
        if (!token) return null
        const decode:any = jwt.jwtDecode(token)
        return {name: decode["name"], role: decode["role"]}
    })

    constructor(private readonly http: HttpClient) {
        this.verifyUserLogged()
     }

    login(email: string, password: string) {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obi5kb2VAZW1haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzQ0NTgwMzUyLCJleHAiOjE3NDQ2MTYzNTJ9.CRyiGNswJd50mDTCoSkgC94da5Mlml_SRPYvz1w1EdY"
        this.userToken.set(token)
        sessionStorage.setItem("token", token)
        this.userLogged.set(true)
        /*this.http.post<ResponseLogin>("http://localhost:4100/api/auth/login", { email, password }).subscribe({
            next: (response) => {
                this.userToken.set(response.token)
                sessionStorage.setItem("token", response.token)
                this.userLogged.set(true)
            },
            error: (error) => {
                console.error(error);
                this.userToken.set(null)
                this.userLogged.set(false)
            }
        })*/
    }

    logout() {
        this.userLogged.set(false);
        sessionStorage.clear()
        this.router.navigate(['/']);
    }

    verifyUserLogged() {
        const token = sessionStorage.getItem("token")
        if (token) {
            this.userToken.set(token)
            this.userLogged.set(true)
            return true
        } else {
            this.userToken.set(null)
            this.userLogged.set(false)
            return false
        }
    }


}