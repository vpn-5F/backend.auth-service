import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { SignInDto, SignUpDto } from '../dto';
import { JwtAuthGuard } from '../guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async signUp(@Body() signUpDto: SignUpDto) {
    return await this.authService.signUp(signUpDto);
  }

  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('signout')
  async signOut(@Req() req: { user: { userId: string } }) {
    await this.authService.signOut(req.user.userId);
    return { message: 'Successfully signed out' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('ping')
  test() {
    return { data: 'ok' };
  }
}
