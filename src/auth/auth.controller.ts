import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor() {}

  @UseGuards(AuthGuard) @Get('profile') getProfile(@Request() req) {
    return req.user;
  }
}
