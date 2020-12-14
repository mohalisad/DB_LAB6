import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import AuthUserClass from './auth-user/auth-user.user';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
@ApiTags('Authentication')
@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @ApiBody({type: AuthUserClass})
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
