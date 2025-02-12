import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const appPort = Number(process.env.APP_PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(appPort, () => {
    console.log(`Server is rining on port ${appPort}`);
  });
}
bootstrap();
