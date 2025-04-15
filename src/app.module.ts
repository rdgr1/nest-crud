import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UfModule } from './uf/uf.module';
import { CidadeModule } from './cidade/cidade.module';
import { EstudanteModule } from './estudante/estudante.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host: 'localhost',
      port: 5432,
      username: 'rdgr777',
      password: '995647',
      database: 'crud_db',
      entities: [__dirname + '/**/*.entity{.ts,js}'],
      synchronize: true,
    }),
    UfModule,
    CidadeModule,
    EstudanteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
