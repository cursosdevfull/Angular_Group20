import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "sergio@email.com" && password === "Elgigante2025") {
          resolve("User logged in successfully");
        }

        reject("Invalid credentials");
      }, 2000);
    })
  }
}
