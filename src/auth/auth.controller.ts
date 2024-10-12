import { Controller, Post, Body, UseGuards, Get, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('login')
    @UseGuards(AuthGuard('oauth2'))
    async login(@Body('access_token') accessToken: string) {
        const user = await this.authService.validateOAuthAccessToken(accessToken);
        return this.authService.login(user);
    }

    @Get('callback')
    @UseGuards(AuthGuard('oauth2'))
    async oauthCallback(@Req() req) {
        return this.authService.login(req.user);
    }
}