import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";

export type ResponseLogin = {
    status: number,
    message: string,
}

@Injectable()
export class AuthService {
    userLogged = signal<boolean>(false);

    constructor(private readonly http: HttpClient) { }

    login(email: string, password: string) {
        this.http.post<ResponseLogin>("http://localhost:3000/auth/login", { email, password }).subscribe({
            next: (response) => {
                this.userLogged.set(true)
            },
            error: (error) => {
                console.error(error);
                this.userLogged.set(false)
            }
        })
    }
}