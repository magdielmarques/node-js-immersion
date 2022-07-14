// instalar driver
// npm i mongoose
// Mongoose.connect('mongodb://user:passwordhost@host:port/database')// conectar com o banco por URI

const mongoose = require('mongoose')
const URI = 'mongodb://localhost:27017/mongodb-estudo'

mongoose.connect(URI, error => {
                        if (!error) return;
                        console.error('Falha na conexão! \n \n', error)
                })

const connection = mongoose.connection
connection.once('open', () => console.log('database rodando!'))

