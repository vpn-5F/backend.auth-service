import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RedisService } from './infra/redis';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './infra/redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RedisModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [RedisService, AppService],
  exports: [RedisService],
})
export class AppModule {}
