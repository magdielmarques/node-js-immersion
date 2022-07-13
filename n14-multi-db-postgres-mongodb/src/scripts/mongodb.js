// conectar via terminar ao mongo
docker ps
docker exec -it d0be7146c4e1 mongo -u magdielmarques -p minhasenha --authenticationDatabase estudo

// show databases
show dbs

// mudando o contexto para uma database
use guitars

// mostra as collections (tabelas)
show collections

// adicionando tabelas à database
db.info.insert({
  brand: 'Fender',
  pricing: 1000,
  age: 1996,
  color: 'White'
})