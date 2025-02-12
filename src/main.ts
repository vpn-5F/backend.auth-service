import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './infra/db';

async function bootstrap(): Promise<void> {
  AppDataSource.initialize()
    .then(() => {
      console.log('Data base conected');
    })
    .catch((error) => console.log('Data base error conect:', error));

  const appPort = Number(process.env.APP_PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort, () => {
    console.log(`Server is rining on port ${appPort}`);
  });
}
bootstrap();
