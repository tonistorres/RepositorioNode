## 1- Passos para criar um banco do Zero com Siquelize

#### Comandos executados no projeto:

> Iniciando um ORM na minha aplicação 
- [x] - npm install --save mysql2
- [x] - npm install --save sequelize
- [x] - npx sequelize-cli init

#### Comando Sequelize
> Configurar dados da conexão no arquivo config.json

```json
 "development": {
    "username": "root",
    "password": "",
    "database": "sequelize_zero",
    "host": "localhost",
    "dialect": "mysql"
  },
```

> Criar um banco:
```console
npx sequelize-cli db:create
```
> Criando uma tabela

```console
npx sequelize-cli model:generate --name Product --attributes name:string 
```