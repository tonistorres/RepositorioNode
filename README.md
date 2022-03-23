### Hello World Node + Express
 ![Node + Express](./node.png)
 
1- Demonstrando Hello Workd em Express;
2- Dependencias ou Pacotes Instalados:
   - [x] - FrameWork Express ;
   - [x] - nodemom ;

3 - Comandos Utilizados instalação:
   - [x] - npm i nodemon -D;
-  [Link Pacote Nodemon ](https://duckduckgo.com)
  > Obs.: O D MAIÚSCULO é informa que é uma forma contraída de dizer que é uma Dependência de Desenvolvimento, ou seja, na hora de subir para a produção essa dependência não tem importancia para o bom funcionamento da minha aplicação, essa dependencia é somente para testes no momento do desenvolvimento.
  - [x] - npm i express;  
  -  [Link Express ](https://www.npmjs.com/package/express)

4 - Para Automatizar o nodemon:
  >Bem para automatizar o nodemon iremos acessar o package.json, e no sub-objeto scripts iremos adicionar a seguinte insturação:
  ```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
  ```

5- Sobre Execução da Aplicação:
> Para executarmos a aplicação iremos executar o comando abaixo:
```console
npm run dev
```

OBSERVAÇÃO IMPORTANTE: A ferramenta nodemom é muito útil no desenvolvimento de aplicações, porém em produção podemos ter problemas de reinicialização da aplicação, devido ao fato que qualquer alteração sofrida em um dado arquivo afeta toda aplicação. 
Para produção configure seu package.json colocando no objeto Script node index.js

  ```json
 "scripts": {
     "script":"node index.js",
    "test": "echo \"Error: no test specified\" && exit 1",
//    "dev": "nodemon index.js"

  },
  ```