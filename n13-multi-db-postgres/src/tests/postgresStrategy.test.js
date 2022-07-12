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
})