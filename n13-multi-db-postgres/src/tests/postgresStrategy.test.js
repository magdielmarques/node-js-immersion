const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres())
const MOCK_GUITAR_CREATE = {
  brand: 'Taylor',
  color: 'Black'
} 


describe('Postgres Strategy', function () {
  this.timeout(Infinity) 
  it('PostgresSQL Connection', async function () {
    const result = await context.isConected()
    assert.equal(result, true)
  })
  it('Should create', async function () {
    const result = await context.create(MOCK_GUITAR_CREATE)

    assert.deepEqual(result, MOCK_GUITAR_CREATE)
  })
})