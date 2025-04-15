import { Module } from '@nestjs/common';
import { UfService } from './uf.service';
import { UfController } from './uf.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uf } from './entities/uf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Uf])],
  controllers: [UfController],
  providers: [UfService],
})
export class UfModule {}
