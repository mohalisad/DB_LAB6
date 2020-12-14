import { Module } from '@nestjs/common';
import { AuthUserService } from './auth-user.service';

@Module({})
export class AuthUserModule {
    providers: [AuthUserService]
}
