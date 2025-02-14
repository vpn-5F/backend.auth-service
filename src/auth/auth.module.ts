import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { controllers, guards, services } from '.';
import { JwtStrategy } from './jwt.strategy';
import { RedisModule } from '@/infra/redis/redis.module';
import { JwtAuthGuard } from './guards';

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '100y', // Практически бесконечный срок действия
        },
      }),
      inject: [ConfigService],
    }),
    RedisModule,
  ],
  controllers: controllers,
  providers: [...services, JwtStrategy, JwtAuthGuard],
  exports: [...guards, PassportModule],
})
export class AuthModule {}
