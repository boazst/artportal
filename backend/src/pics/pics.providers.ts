import { Connection, Repository } from 'typeorm';
import { Pics } from '../entity/pics.entity';
export const picsProviders = [
  {
    provide: 'PICS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Pics),
    inject: ['DATABASE_CONNECTION'],
  },
];
