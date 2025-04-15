# 📘 README — Projeto CRUD NestJS + PostgreSQL

## 🧠 Sobre

Projeto backend criado com NestJS usando TypeORM e PostgreSQL, contendo as entidades:

- **Uf**: representa estados brasileiros
- **Cidade**: ligada a uma UF
- **Estudante**: pessoa vinculada a uma cidade

Inclui rotas REST para criar, ler, atualizar e deletar registros.

---

## 🚀 Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Criar banco de dados no PostgreSQL
```bash
psql -U rdgr777 -c "CREATE DATABASE crud_db;"
```

### 3. Rodar o projeto
```bash
npm run start:dev
```

O NestJS subirá em `http://localhost:3000`.

---
