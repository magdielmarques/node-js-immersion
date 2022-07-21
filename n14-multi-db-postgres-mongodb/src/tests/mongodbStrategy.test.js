const assert = require('assert');
const MongoDb = require('../db/strategies/mongodb');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new MongoDb());
describe('MongoDB Strategy', function() {
  this.beforeAll(async function() {
    await context.connect()
  })
  
  it('Verify conection', async function() {
    const result = await context.isConected()
    const expected = 'Conectado'

    assert.deepEqual(result, expected)
  })
})