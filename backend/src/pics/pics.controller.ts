import { Get, Controller, Param } from '@nestjs/common';

import { PicsService } from './pics.service';
import { PicsModel } from './../../../lib/picsModel';

@Controller('pics')
export class PicsController {
  constructor(private readonly picsService: PicsService) {}
  @Get('/all')
  async findAll(): Promise<PicsModel[]> {
    return await this.picsService.findAll();
  }

  @Get('/one/:id')
  async findOne(@Param('id') id): Promise<PicsModel> {
    return await this.picsService.findOne(id);
  }

  @Get('/find/:key')
  async find(@Param('key') key): Promise<PicsModel[]> {
    return await this.picsService.findBySubject(key);
  }
}
