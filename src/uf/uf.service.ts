import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Uf } from './entities/uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';

@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly repo: Repository<Uf>
  ) {}

  create(dto: CreateUfDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['cidades'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['cidades'] });
  }

  update(id: number, dto: UpdateUfDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}