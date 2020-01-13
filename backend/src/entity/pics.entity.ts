import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { CustomEmail } from '../user/CustomEmail';

@Entity('pics')
export class Pics {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  subject: string;
  @Column()
  size: string;
  @Column()
  Cdate: string;
  @Column()
  frame: string;
  @Column()
  pic_path: string;
}
