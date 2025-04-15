import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from 'src/cidade/entities/cidade.entity';

@Entity()
export class Uf {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome: string;
    @OneToMany(() => Cidade, cidade => cidade.uf)
    cidades: Cidade[];

}
