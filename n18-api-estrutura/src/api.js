const Hapi = require('hapi');
const Context = require('./db/strategies/base/contextStrategy');
const MongoDb = require('./db/strategies/mongodb/mongodb');
const GuitarSchema = require('./db/strategies/mongodb/schemas/guitarSchema');
const GuitarRoute = require('./routes/guitarRoute')

function mapRoutes(instance, methods) { // funcao de trazer o nome do projeto
    // ['list', 'create', 'update', 'etc']
    // new GuitarRoute()['list']() ...isso
    // new GuitarRoute().list() ...é igual a isso
    // isso que esta acima sera feito dinamicamente

    return methods.map(nameMethod => instance[nameMethod]())
}

const main = async () => {
    const connection = MongoDb.connect()
    const context = new Context(new MongoDb(connection, GuitarSchema))
    
    const servidor = Hapi.Server({
        port: 6500,
        host: 'localhost'
    });

    console.log('Entendendo o retorno do metodo MapRoutes -> \n', mapRoutes(new GuitarRoute(context), GuitarRoute.methods()));

    servidor.route(
        // {
        //     method: 'GET',
        //     path: '/guitar',
        //     handler: (request, head) => {
    
        //         return context.read();
        //     }
        ...mapRoutes(new GuitarRoute(context), GuitarRoute.methods())
    );

    await servidor.start();
    console.log('Servidor rodando na porta %s', servidor.info.uri);

    return servidor
};

module.exports = main();