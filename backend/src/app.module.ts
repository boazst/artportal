import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PicsModule } from './pics/pics.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(), PicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
