import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.modules';
import { picsProviders } from './pics.providers';
import { PicsService } from './pics.service';
import { PicsController } from './pics.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...picsProviders, PicsService],
  controllers: [PicsController],
  exports: [],
})
export class PicsModule {}
