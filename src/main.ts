import { NestFactory } from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import { AppModule } from './app.module';
import { from } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('DB LAB6 example')
    .setDescription('DB LAB6 API description')
    .setVersion('1.0')
    .addTag('Authentication')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
