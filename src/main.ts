import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { creatFiles ,creatDB } from './budget/utils/functions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await creatFiles()
  await creatDB()

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
