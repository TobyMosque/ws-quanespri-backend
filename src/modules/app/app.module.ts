import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from 'src/modules/company/company.module';
import { config } from 'src/config';

@Module({
  imports: [CompanyModule, config],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
