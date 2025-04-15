import { Module } from '@nestjs/common';
import { EstudanteService } from './estudante.service';
import { EstudanteController } from './estudante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './entities/estudante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Estudante])],
  controllers: [EstudanteController],
  providers: [EstudanteService],
})
export class EstudanteModule {}
