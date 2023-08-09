import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/modules/app/app.module';
import { CompanyModule } from 'src/modules/company/company.module';
import { INestApplication } from '@nestjs/common';

interface GetOpenApiSpecParams {
  app?: INestApplication;
}

export async function getOpenApiSpec({ app }: GetOpenApiSpecParams = {}) {
  const config = new DocumentBuilder()
    .setTitle('Quasar Nest example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'access-token',
    )
    .build();
  return SwaggerModule.createDocument(app, config, {
    include: [AppModule, CompanyModule],
    operationIdFactory(controllerKey, methodKey) {
      return methodKey;
    },
  });
}
