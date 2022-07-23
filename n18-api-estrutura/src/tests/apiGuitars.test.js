const assert = require('assert')
const api = require('./../api')
let servidor = {}

describe.only('Suite de testes da API Guitar', function () {
  this.beforeAll(async () => {
    servidor = await api
  })

  it('Should read /guitar', async () => {
    const result = await servidor.inject({
      method: 'GET',
      url: '/guitar'
    })
    console.log('Result -> \n', result.payload);
    const dados = JSON.parse(result.payload) // converte JSON em Objeto
    const statusCode = result.statusCode

    assert.deepEqual(statusCode, 200)
    assert.ok(Array.isArray(dados)) // afirma que resultado é um Array
  })
})
