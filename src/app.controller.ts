import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth-guard';
import { AuthGuard } from '@nestjs/passport';
@Controller()
export class AppController {
  constructor(private authService: AuthService) {
    //
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('auth/testJWT')
  async test(@Request() req) {
    return 'pippo';
  }
}
