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

// posso rodar comandos JS dentro do terminal do mongodb
for (let i=0; i < 20; i++) {
  db.person.insert({
    name: `Magdiel ${i}`,
    age: i,
    color: 'Black'
  })
}

// conta quantidade de objetos inseridos na collection
db.person.count()

// traz apenas 1
db.person.findOne()

// traz 5 itens e ordenar pelo nome em ordem do menor para o maior
db.person.find().limit(5).sort({ name: -1})

// passa o where vazio como parametro; traz apenas a coluna nome e culta o id
// utiliza o 1 ou 0 para sinalizar o que desejo trazer ou nao (true ou false)
db.person.find({}, { name: 1, _id:0 })

// create
db.person.insert({
  name: 'Magdiel',
  age: 24,
  color: 'Black'
})

// read
db.person.find()

// update (nesse exemplo vemos que é preciso especificar o que queremos fazer no mongo)
// senao podemos acabar perdendo dados, igual ocorre nesse exemplo
db.person.find({ name: 'Magdiel' }).pretty()
db.person.update({ _id: ObjectId("62cf6fef515933199b4d1eca")}, { name: 'Magdiel Atualizado'})
db.person.find({ name: 'Magdiel Atualizado' }).pretty()

// update da forma correta
// com o $set eu especifico o que eu quero atualizar
// obs.: se passar o nome da chave do objeto que nao existe dentro da collection, ele vai adicionar
// um novo atributo para minha collection
db.person.find().pretty()
db.person.update({ _id: ObjectId("62cf725c515933199b4d1ede") }, { $set: { name: 'Magdiel Atualizado' }})
db.person.find({ _id: ObjectId("62cf725c515933199b4d1ede") }).pretty()

// delete
db.person.remove({}) // deleta todos da collection
db.person.remove({ name: 'Magdiel Atualizado' })