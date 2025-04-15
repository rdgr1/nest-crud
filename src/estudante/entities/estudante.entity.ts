import { Cidade } from "src/cidade/entities/cidade.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  matricula: string;

  @Column()
  email: string;

  @Column()
  dt_nascimento: string;

  @ManyToOne(() => Cidade, cidade => cidade.estudantes)
  cidade: Cidade;
}