import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthUserModule } from 'src/auth-user/auth-user.module';
import { AuthUserService } from 'src/auth-user/auth-user.service';

@Module({
  imports: [
    AuthUserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, AuthUserService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}