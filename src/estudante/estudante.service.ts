import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudante } from './entities/estudante.entity';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';

@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private readonly repo: Repository<Estudante>
  ) {}

  create(dto: CreateEstudanteDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['cidade'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['cidade'] });
  }

  update(id: number, dto: UpdateEstudanteDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
