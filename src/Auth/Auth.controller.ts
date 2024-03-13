import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './Auth.service';

@Controller("/auth")
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post("/login")
  login(): string {
    return this.service.login();
  }

  @Post("/register")
  register(): string {
    return this.service.register();
  }
}
