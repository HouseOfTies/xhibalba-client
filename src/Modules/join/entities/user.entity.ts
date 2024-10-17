import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  first_name: string;

  @Column({ length: 500 })
  last_name: string;

  @Column()
  username: string;

  @Column()
  language: number;

  @Column()
  is_bot: boolean;

  @Column()
  sync_token: string;
}
