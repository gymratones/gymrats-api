import { Controller, Get, Post, UseGuards, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('google'))
    @Get('google')
    async googleAuth(@Req() req) { }

    @UseGuards(AuthGuard('google'))
    @Get('google/callback')
    googleAuthRedirect(@Req() req) {
        return this.authService.googleLogin(req);
    }
}