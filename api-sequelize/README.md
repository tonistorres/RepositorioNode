### Setup da Aplicação:

#### 1 - Passos Iniciais (check List):

- [x] Criando uma Pastas api-sequelize;

```console
mkdir api-sequelize
```

- [x] - Entrando na pasta;

```console
cd api-sequelize
```
- [x] - Criar um arquivo README.md;

```console
touch README.md
```

- [x] - criar uma arquivo .gitignore e colocar corpo do arquivo node_modules como pasta a ser ignorada 

```console
touch .gitignore
```
> Dentro do Arquivo no corpo colocar: node_modules/

- [x] - Executar o comando de inicialização do git localmente na pasta;

```console
git init
```

- [x] - instalar o "git-commit-msg-linter": "^4.1.1";

```console
npm i git-commit-msg-linter -D
```

- [x] - Customizando git log;

```console
git log --pretty=format:'%C(blue)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)cr'
```
- [x] - npm install --save mysql2
- [x] - npm install --save sequelize
