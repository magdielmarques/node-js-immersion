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
const state = connection.readyState
connection.once('open', () => console.log('database rodando! \n', state))
/**
 * 0: Desconectado
 * 1: Conectado
 * 2: Conectando
 * 3: Desconectado
 */

const guitarSchema = new mongoose.Schema({
        brand: {
                type: String, 
                required: true
        },
        color: {
                type: String, 
                required: true
        }, 
        insertedAt: {
                type: Date, 
                default: new Date()
        }
})

const model = mongoose.model('guitar', guitarSchema)

async function main() {
        const result = await model.create({
                brand: 'Fender',
                color: 'Red',
        })
        console.log('result -> \n', result);

        const listItems = await model.find()
        console.log('listItems -> \n', listItems);
}

main()
