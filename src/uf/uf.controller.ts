
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UfService } from './uf.service';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';

@Controller('uf')
export class UfController {
  constructor(private readonly service: UfService) {}

  @Post()
  create(@Body() dto: CreateUfDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateUfDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
