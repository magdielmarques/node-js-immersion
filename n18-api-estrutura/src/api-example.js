const Hapi = require('hapi');

const main = async () => {
    const servidor = Hapi.server({
        port: 6500,
        host: 'localhost'
    });

    servidor.route({
        method: 'GET',
        path: '/guitar',
        handler: (request, head) => {

            return 'Hello World!';
        }
    });

    await servidor.start();
    console.log('Servidor rodando na porta %s', servidor.info.uri);
};

main();