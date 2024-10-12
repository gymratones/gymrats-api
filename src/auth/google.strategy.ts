import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-token';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleTokenStrategy extends PassportStrategy(Strategy, 'google-token') {
    constructor(configService: ConfigService) {
        super({
            clientID: configService.get<string>('GOOGLE_CLIENT_ID'),
            clientSecret: configService.get<string>('GOOGLE_CLIENT_SECRET'),
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: any) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        done(null, user);
    }
}