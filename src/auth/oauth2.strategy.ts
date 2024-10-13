import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import axios from 'axios';

@Injectable()
export class OAuth2Strategy extends PassportStrategy(Strategy, 'oauth2') {
    constructor() {
        super({
            authorizationURL: 'https://proveedor-oauth.com/oauth/authorize',
            tokenURL: 'https://proveedor-oauth.com/oauth/token',
            clientID: 'TU_CLIENT_ID',
            clientSecret: 'TU_CLIENT_SECRET',
            callbackURL: 'https://tu-api.com/auth/callback',
        });
    }

    async validate(accessToken: string): Promise<any> {
        const userData = await this.getUserInfo(accessToken);
        return userData;
    }

    private async getUserInfo(accessToken: string): Promise<any> {
        try {
            const response = await axios.get('https://proveedor-oauth.com/userinfo', {
                headers: { Authorization: `Bearer ${accessToken}` },
            });
            return response.data;
        } catch (error) {
            throw new Error('Failed to fetch user info from OAuth provider');
        }
    }
}