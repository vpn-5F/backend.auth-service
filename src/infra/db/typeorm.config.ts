import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../../auth/entity/user.entity';

config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false, // true just at development
  logging: false, // true just at development
  entities: ['src/auth/entity/*.entity.ts'],
  migrations: [join(__dirname, 'migrations/*.ts')],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  subscribers: [],
});

export default AppDataSource;

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User],
  synchronize: false,
  logging: false,
  migrationsRun: true,
};
