import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("login")
  async login(@Body() loginAuthDto: LoginAuthDto) {
    try {
      const response = await this.authService.login(loginAuthDto.email, loginAuthDto.password)
      return { status: 200, message: response }
    } catch (error) {
      return new BadRequestException(error)
    }

  }
}
