import { Controller, Post, UseGuards, Request, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/skip-auth.decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Public()
    @Post('login')
    async googleTokenAuth(@Req() req) {
        return this.authService.login(req.body.data.user);
    }

    @Get('profile')
    getProfile(@Request() req) {
        return req.user
    }
}