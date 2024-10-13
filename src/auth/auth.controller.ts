import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @UseGuards(AuthGuard('google-token'))
    async googleTokenAuth(@Req() req) {
        return this.authService.login(req.body.data.user);
    }
}