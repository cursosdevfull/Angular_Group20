import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom, Observable } from "rxjs";

export type ResponseLogin = {
    status: number,
    message: string,
}

@Injectable()
export class AuthService {
    constructor(private readonly http: HttpClient) { }

    login(email: string, password: string): Observable<ResponseLogin> {
        return this.http.post<ResponseLogin>("http://localhost:3000/auth/login", { email, password })
    }

    /*login(email: string, password: string): Promise<ResponseLogin> {
        return lastValueFrom(this.http.post<ResponseLogin>("http://localhost:3000/auth/login", { email, password }))*/



    /*         return fetch("http://localhost:3000/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json()) */


    /*   return new Promise((resolve, reject) => {
          setTimeout(() => {
              if (email === "sergio@email.com" && password === "Elgigante2025") {
                  return resolve(true)
              }
 
              return reject("Invalid credentials")
          }, 2000)
      }) */


    //}
}