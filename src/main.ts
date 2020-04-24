import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const APP_DIRECTORY = join(__dirname, '..', 'views');
  const STATIC_ASSETS = join(__dirname, '..', 'public');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setViewEngine('hbs');
  app.setBaseViewsDir(APP_DIRECTORY);
  app.useStaticAssets(STATIC_ASSETS);

  await app.listen(3000);
}
bootstrap();
