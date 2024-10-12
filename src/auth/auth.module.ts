import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OAuth2Strategy } from './oauth2.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'oauth2' }),
    JwtModule.register({
      secret: 'tuSecretoJWT',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService, OAuth2Strategy],
  controllers: [AuthController],
})
export class AuthModule { }