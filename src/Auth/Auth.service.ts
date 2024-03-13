import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    return 'LOGIN!';
  }

  register() {
    return 'Registered'
  }
}
