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
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'rdgr777',
      password: process.env.DB_PASSWORD || '995647',
      database: process.env.DB_DATABASE || 'crud_db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UfModule,
    CidadeModule,
    EstudanteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
