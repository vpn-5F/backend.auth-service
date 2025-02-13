import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature(entities)],
})
export class AuthModule {}
