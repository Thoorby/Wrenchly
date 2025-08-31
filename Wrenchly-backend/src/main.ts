import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow frontend (Next.js) to make requests
  app.enableCors();

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
