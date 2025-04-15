import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidade } from './entities/cidade.entity';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Injectable()
export class CidadeService {
  constructor(
    @InjectRepository(Cidade)
    private readonly repo: Repository<Cidade>
  ) {}

  create(dto: CreateCidadeDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['uf', 'estudantes'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['uf', 'estudantes'] });
  }

  update(id: number, dto: UpdateCidadeDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
