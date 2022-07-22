// 1 - instalar hapi
// 2 - inicializar o fw

const Hapi = require('@hapi/hapi');

const init = async () => {

  const server = Hapi.server({
      port: 3000,
      host: 'localhost'
  });

  await server.start();
  console.log(' Server running on %s', server.info.uri);
};