import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport/dist';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { localStrategy } from './local.strategy';

@Module({
  providers: [AuthService, localStrategy],
  imports: [UsersModule, PassportModule],
})
export class AuthModule {}
