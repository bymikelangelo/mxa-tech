import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Firebase } from './services/firebase';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  Firebase.initFirebase();
  await app.listen(3000);
}
bootstrap();
