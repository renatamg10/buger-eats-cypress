## Projeto Buger Eats
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) 

> _Projeto desenvolvido no curso Cypress Descovery (qacademy.io) para automatização de testes em aplicação web em Cypress e JS._ 

### :pushpin: Pré-requisitos
- NodeJs - versão utilizada: 14.18 (https://nodejs.org/en/)
- VSCode (https://code.visualstudio.com/)

### :telescope: Testes
- Login
- Cadastro de entregador (casos de teste de sucesso e exceções)

### :dart: Execução do projeto
- Download/clone do projeto: https://github.com/renatamg10/buger-eats-cypress.git
- Acessar o diretório do projeto no terminal e executar os comandos:
+ **_npm install_** (realiza a instalação das dependências para o projeto)
+ **_npm run cypress:open_** ou **_npm run test_** (apresenta a interface do cypress para a execução dos testes)
+ **_npx cypress run_** (executa os testes a partir do terminal, com vídeos dos casos de teste e captura das telas para os cenários com erro)
- Para gerar o relatório em Mochawesome:
  ```
  npm install --save-dev mochawesome
  ```
  ```
  npm install --save-dev mocha
  ```
  _inserir em cypress.config.js em module.exports = defineConfig: reporter: 'mochawesome'_
  ```
  npx cypress run --reporter mochawesome
  ```
  _Executa todos os cenários e cria a pasta "mochawesome-report"_
    - _O relatório é apresentado no arquivo "mochawesome.html"_


#### :book: Link do curso: https://www.qacademy.io/home/course/cypress-discovery
