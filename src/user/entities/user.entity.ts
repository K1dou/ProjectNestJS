import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column({ nullable: false })
  email: string;
  @Column()
  phone: string;
  @Column({ nullable: false })
  cpf: string;
  @Column({ nullable: false })
  password: string;
}
