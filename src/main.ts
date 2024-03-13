import { NestFactory } from '@nestjs/core';
import { AppModule } from './App.module';

const PORT = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`listening on port [${PORT}]`)
}
bootstrap();
