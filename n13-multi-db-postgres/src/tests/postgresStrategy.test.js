const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres())
const MOCK_GUITAR_CREATE = {
  brand: 'TAYLOR',
  color: 'BLACK'
} 

describe('Postgres Strategy', function () {
  this.timeout(Infinity) 
  this.beforeAll(async function () {
    await context.connect()
  })
  
  it('PostgresSQL Connection', async function () {
    const result = await context.isConected()
    assert.equal(result, true)
  })

  it('Should create', async function () {
    const result = await context.create(MOCK_GUITAR_CREATE)
    delete result.id
    assert.deepEqual(result, MOCK_GUITAR_CREATE)
  })

  it('Should read', async function () {
    const [result] = await context.read({ brand: MOCK_GUITAR_CREATE.brand })
    delete result.id
    // get the first position
    // const position = result[0]
    // ou
    // const [position1, position2] = ['is the first', 'is the second']
    assert.deepEqual(result, MOCK_GUITAR_CREATE)
  })
})