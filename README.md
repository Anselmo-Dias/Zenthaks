# Guilda API

API para gerenciar guildas, missões e jogadores.

## Começando

Estas instruções fornecerão uma cópia do projeto em funcionamento em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

O que você precisa para instalar o software:

- Node.js
- npm

### Instalação

Um passo a passo que informa como obter um ambiente de desenvolvimento em execução:

1. Clone o repositório
   ```sh
   git clone https://github.com/seu_usuario/seu_repositorio.git
   ```
2. Instale os pacotes NPM
   ```sh
   npm install
   ```
3. Configure suas variáveis de ambiente
   Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
   ```
   DATABASE_URL="postgresql://user:password@host:port/database"
   ```

### Executando a aplicação

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```sh
npm run start:dev
```

## Banco de dados

Para executar as migrações do banco de dados, execute o seguinte comando:

```sh
npm run db:migrate
```

Para gerar o cliente Prisma, execute o seguinte comando:

```sh
npm run db:generate
```

## Rotas

A documentação das rotas da API pode ser encontrada no arquivo `rotas.md`.

### Jogadores

| Método | Rota | Descrição |
| --- | --- | --- |
| POST | /players | Cadastrar um novo jogador |
| GET | /players | Listar todos os jogadores |
| GET | /players/:id | Buscar um jogador específico |
| PUT | /players/:id | Atualizar informações de um jogador |
| DELETE | /players/:id | Excluir jogador |

### Missões

| Método | Rota | Descrição |
| --- | --- | --- |
| POST | /players/:playerId/missions/:missionId/assign | Atribuir uma missão a um jogador |
| PATCH | /players/:playerId/missions/:missionId/start | Jogador inicia uma missão |
| PATCH | /players/:playerId/missions/:missionId/complete | Jogador completa uma missão |
| GET | /players/:playerId/missions | Listar as missões de um jogador específico |

## Construído com

* [Express](https://expressjs.com/) - O framework web usado
* [Prisma](https://www.prisma.io/) - O ORM usado
* [TypeScript](https://www.typescriptlang.org/) - O superconjunto de JavaScript usado
