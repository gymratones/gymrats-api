import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(googleUser: any) {
        const user = await this.userService.findOrCreateUser({
            oauthId: googleUser.id,
            email: googleUser.email,
            firstName: googleUser.firstName,
            lastName: googleUser.lastName,
            profilePicture: googleUser.picture,
            accessToken: googleUser.accessToken
        }, 'google');

        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}