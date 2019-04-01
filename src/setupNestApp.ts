import { INestApplication, ValidationPipe } from '@nestjs/common';
// import setupSwagger from './utils/swagger';

export default (nestApp: INestApplication): void => {
  nestApp.enableCors();

  // setupSwagger(nestApp);

  nestApp.useGlobalPipes(
    new ValidationPipe({ transform: true, whitelist: true }),
  );
};
