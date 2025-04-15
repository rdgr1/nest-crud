import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Uf } from 'src/uf/entities/uf.entity';

@Entity()
export class Cidade {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @ManyToOne(() => Uf, uf => uf.cidades)
  uf: Uf;
}