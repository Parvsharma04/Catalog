import { Injectable } from '@nestjs/common';
import { CustomRequest } from './user.controller';

@Injectable()
export class UserService {
  getMe(req: CustomRequest) {
    return req;
  }
}
