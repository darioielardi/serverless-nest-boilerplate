import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import setupNestApp from './setupNestApp';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  setupNestApp(app);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
