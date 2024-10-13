import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleTokenStrategy extends PassportStrategy(Strategy, 'google-token') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope: ['email', 'profile'],
            callbackURL: "http://localhost:5001/auth/google/callback"
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
        try {
            done(null, profile);
        } catch (err) {
            done(new UnauthorizedException(), false);
        }
    }
}