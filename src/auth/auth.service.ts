import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async validateOAuthAccessToken(accessToken: string): Promise<any> {
        try {
            const response = await axios.get('https://proveedor-oauth.com/validate', {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            if (response.data.valid) {
                return response.data.user;
            } else {
                throw new Error('Invalid OAuth access token');
            }
        } catch (error) {
            throw new Error('Failed to validate OAuth access token');
        }
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}