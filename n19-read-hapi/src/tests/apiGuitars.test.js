const assert = require('assert')
const api = require('../api')
let servidor = {}

describe('Suite de testes da API Guitar', function () {
  this.beforeAll(async () => {
    servidor = await api
  })

  it('Should read /guitar', async () => {
    const result = await servidor.inject({
      method: 'GET',
      url: '/guitar?skip=0&limit=3'
    })
    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode

    assert.deepEqual(statusCode, 200)
    assert.ok(Array.isArray(dados))
  })

  it('Read /guitar - Should return only LIMIT_LENGTH items', async () => {
    const LIMIT_LENGTH = 3
    const result = await servidor.inject({
      method: 'GET',
      url: `/guitar?skip=0&limit=${LIMIT_LENGTH}`
    })

    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode
    assert.deepEqual(statusCode, 200)
    assert.ok(dados.length === 3)
  })

  it('Read /guitar - Should return error', async () => {
    const LIMIT_LENGTH = 'ASDASD'
    const result = await servidor.inject({
      method: 'GET',
      url: `/guitar?skip=0&limit=${LIMIT_LENGTH}`
    })

    assert.deepEqual(result.payload, "Erro interno no servidor")
  })

  it('Read /guitar - Should filter items', async () => {
    const LIMIT_LENGTH = 100
    const BRAND = 'FENDER-1658452823246'
    const result = await servidor.inject({
      method: 'GET',
      url: `/guitar?skip=0&limit=${LIMIT_LENGTH}&brand=${BRAND}`
    })

    const dados = JSON.parse(result.payload)
    const statusCode = result.statusCode
    assert.deepEqual(statusCode, 200)
    assert.ok(dados[0].brand === BRAND)
  })
})
