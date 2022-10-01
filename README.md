# Sobre o projeto
- Autor: Guilherme Endlich
- Projeto é divido em API(backend) e WEB(frontend)

## Como executar a API
1. Primeiramente voce vai precisar de Docker e Node.js instalado no seu computador
2. Insira todos as variaveis em um arquivo `.env`, seguindo o molde do `.env.example`
3. Abra o powershell/terminal na pasta `/carselling-api/` e execute o comando `docker-compose up` para subir um container do docker(se ja tiver um container de Postgres rodando no seu computador pode pular essa parte)
4. Conecte no banco de dados e crie uma db com o mesmo nome da variavel `POSTGRES_DB`
5. Novamente no powershell/terminal na pasta `/carselling-api/` execute o comando `npm install` pra instalar todas as dependencias
6. Após isso utilize o comando `npm run db:migrate`
7. Quando o programa terminar de fazer as migrations execute `npm run dev`
8. Sua API está funcional e rodando na porta que voce configurou no `.env`

## ROTAS API
- ` TABELA USERS `
- `/GET/ http://localhost:PORTA/api/users/`: INDEX
- `/GET/ http://localhost:PORTA/api/users/[id do usuario]`: READ
- `/POST/ http://localhost:PORTA/api/users/`: CREATE
- `/PUT/ http://localhost:PORTA/api/users/[id do usuario]`: UPLOAD
- `/DELETE/ http://localhost:PORTA/api/users[id do usuario]/`: DELETE
- `/POST/ http://localhost:PORTA/api/users/login`: LOGIN

- ` TABELA CARS `
- `/GET/ http://localhost:PORTA/api/cars/`: INDEX
- `/GET/ http://localhost:PORTA/api/cars/[id do carro]`: READ
- `/POST/ http://localhost:PORTA/api/cars/`: CREATE
- `/PUT/ http://localhost:PORTA/api/cars/[id do carro]`: UPLOAD
- `/DELETE/ http://localhost:PORTA/api/cars/[id do carro]`: DELETE

## Como executar a aplicaçao WEB
1. Abra no projeto, o arquivo `/projeto-globalsys-web/src/api/baseApiRequest.ts`
2. Mude na linha 4 `baseURL: 'http://localhost:PORTA/api/'` o valor de `PORTA` igual ao valor `PORT` do arquivo `.env` de seu backend
3. Vá para linha de comando na pasta `/carselling-web/` e execute o comando `npm install` pra instalar todas as dependencias
4. Execute o comando `npm run start` a aplicaçao WEB vai rodar na porta 3000
