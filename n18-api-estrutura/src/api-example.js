const Hapi = require('hapi');
const Context = require('./db/strategies/base/contextStrategy');
const MongoDb = require('./db/strategies/mongodb/mongodb');
const GuitarSchema = require('./db/strategies/mongodb/schemas/guitarSchema');

const main = async () => {
    const connection = MongoDb.connect()
    const context = new Context(new MongoDb(connection, GuitarSchema))
    
    const servidor = Hapi.Server({
        port: 6500,
        host: 'localhost'
    });

    servidor.route({
        method: 'GET',
        path: '/guitar',
        handler: (request, head) => {

            return context.read();
        }
    });

    await servidor.start();
    console.log('Servidor rodando na porta %s', servidor.info.uri);
};

main();