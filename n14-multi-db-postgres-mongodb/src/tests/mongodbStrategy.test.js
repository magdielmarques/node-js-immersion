const assert = require('assert');
const MongoDb = require('../db/strategies/mongodb');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new MongoDb());
const MOCK_GUITAR_CREATE = {
  brand: 'TAYLOR',
  color: 'BLACK'
} 
const MOCK_GUITAR_UPDATE = {
  brand: 'Taylor updated',
  color: 'Black updated'
}
describe('MongoDB Strategy', function() {
  this.beforeAll(async function() {
    await context.connect()
  })
  
  it('Verify conection', async function() {
    const result = await context.isConected()
    const expected = 'Conectado'

    assert.deepEqual(result, expected)
  })

  it.only('Should create', async function () {
    const { brand, color } = await context.create(MOCK_GUITAR_CREATE)
    assert.deepEqual({ brand, color}, MOCK_GUITAR_CREATE)
  } )
})