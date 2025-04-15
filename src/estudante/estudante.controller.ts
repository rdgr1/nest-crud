import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstudanteService } from './estudante.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';

@Controller('estudante')
export class EstudanteController {
  constructor(private readonly service: EstudanteService) {}

  @Post()
  create(@Body() dto: CreateEstudanteDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEstudanteDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
