import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pics } from '../entity/pics.entity';

@Injectable()
export class PicsService {
  constructor(
    @Inject('PICS_REPOSITORY')
    private readonly picsRepository: Repository<Pics>,
  ) {}

  async findAll(): Promise<Pics[]> {
    return await this.picsRepository.find();
  }

  async findOne(id: number): Promise<Pics> {
    return await this.picsRepository.findOne(id);
  }

  async findBySubject(key: string): Promise<Pics[]> {
    return await this.picsRepository.find({ subject: key });
  }
}
