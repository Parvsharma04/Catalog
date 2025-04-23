import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserService } from './user.service';
export interface CustomRequest extends Request {
  user?: any; // Replace 'any' with the actual type of 'user' if known
}

@Controller('users')
export class UserController {
  constructor(private UserService: UserService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getUsers(@Req() req: CustomRequest) {
    console.log(req);
    return this.UserService.getMe(req.user);
  }
}
