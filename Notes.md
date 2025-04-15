### Alunos

#### Lucas Teodoro Barbosa - `UC22200699`

#### Rodger Vidal Dias - `UC23100279`

#### Plinio Augusto - `UC23103024`

#### Letícia Rodrgues de Souza - `UC23101873`

#### Pedro Thiago Pereira Revoredo - `UC23102203`

#### Luis Gustavo Correia da Silva – `UC23100032`

> Baseado no vídeo "Introdução ao NestJS" (https://www.youtube.com/watch?v=dFFpjjD9cj4)
>
> Projeto prático desenvolvido com adaptações para as entidades: `Uf`, `Cidade`, e `Estudante`, conectando-se a um banco de dados Sqlite.

## "Utilizei Postgres por preferência"

### 1. Instalação do NestJS e criação do projeto

```bash
npm install -g @nestjs/cli
nest new nest-crud
cd nest-crud
```

### 2. Instalação do TypeORM e driver PostgreSQL

```bash
npm install @nestjs/typeorm typeorm pg
```

### 3. Configuração da conexão com o banco

Arquivo: `app.module.ts`

```ts
TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'rdgr777',
  password: '995647',
  database: 'crud_db',
  synchronize: true,
  autoLoadEntities: true,
})
```

### 4. Geração dos recursos com Nest CLI

```bash
nest g resource uf
nest g resource cidade
nest g resource estudante
```

## Entidades e Relacionamentos

### `Uf`

- id
- nome
- sigla
- cidades: relação OneToMany com `Cidade`

### `Cidade`

- id
- nome
- uf: relação ManyToOne com `Uf`
- estudantes: relação OneToMany com `Estudante`

### `Estudante`

- id
- nome
- matricula
- email
- dt_nascimento
- cidade: relação ManyToOne com `Cidade`

---

## Injeção de Dependência

Cada service utiliza `@InjectRepository()` para acessar os dados via TypeORM.

Exemplo:

```ts
@Injectable()
export class UfService {
  constructor(
    @InjectRepository(Uf)
    private readonly repo: Repository<Uf>
  ) {}
```

---

## DTOs

Todos os DTOs usam validações com `class-validator`:

```ts
export class CreateUfDto {
  @IsString()
  nome: string;

  @IsString()
  sigla: string;
}
```

---

## Services

Cada service implementa:

- `create()`
- `findAll()` com `.find({ relations: [...] })`
- `findOne()` idem
- `update()` com `.update()`
- `remove()` com `.delete()`

---

## Controllers

Os controllers expõem rotas REST padrão:

```ts
POST /uf
GET /uf
GET /uf/:id
PATCH /uf/:id
DELETE /uf/:id
```

Mesma lógica vale para `/cidade` e `/estudante`

---

## Testes com REST Client

utilizei o mesmo do video arquivo `testes.http` na raiz do projeto
