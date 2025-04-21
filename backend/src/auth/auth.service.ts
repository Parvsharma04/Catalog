import { Injectable } from '@nestjs/common';


@Injectable()
export class AuthService {

  login() {
    return 'you are logged in.';
  }
  signup() {
    return 'you are signed up.';
  }
}
