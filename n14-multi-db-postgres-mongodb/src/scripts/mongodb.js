// cria usuario
docker exec -it mongodb-estudo mongo --host localhost -u admin -p senhadmin --authenticationDatabase admin --eval "db.getSiblingDB('estudo').createUser({user: 'magdielmarques', pwd: 'minhasenha', roles: [{role: 'readWrite', db: 'estudo'}]})"

// conectar via terminar ao mongo
docker ps
// docker exec -it 7c5db563315e mongo -u magdielmarques -p minhasenha --authenticationDatabase estudo
docker exec -it mongodb-estudo mongo -u magdielmarques -p minhasenha --authenticationDatabase estudo

// show databases
show dbs

// mudando o contexto para uma database
use estudo

// mostra as collections (tabelas)
show collections

// adicionando tabelas à database
db.person.insert({
  name: 'Magdiel',
  age: 24,
  color: 'Black'
})

// encontra tabelas dentro do db atual
db.person.find()

// encontra tabela e exibe bonito
db.person.find().pretty()