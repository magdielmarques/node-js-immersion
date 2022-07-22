const http = require('http'); // modulo of Node

http.createServer((request, response) => { // inicializa o servidor
  response.end('Hello, testing!')
})
.listen(2000, () => console.log('Server running')) // abrindo uma porta do meu SO para que outros possam ver