const assert = require('assert');
const MongoDb = require('../db/strategies/mongodb');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new MongoDb());
const MOCK_GUITAR_CREATE = {
  brand: 'TAYLOR',
  color: 'BLACK'
} 
const MOCK_GUITAR_DEFAULT = {
  brand: `FENDER-${Date.now()}`,
  color: 'BLACK'
} 
const MOCK_GUITAR_UPDATE = {
  brand: 'FENDER updated',
  color: 'BLACK updated'
}
let MOCK_GUITAR_ID = ''

describe('MongoDB Strategy', function() {
  this.beforeAll(async function() {
    await context.connect()
    await context.create(MOCK_GUITAR_DEFAULT)
    const result = await context.create(MOCK_GUITAR_UPDATE)
    MOCK_GUITAR_ID = result.id;
  })
  
  it('Verify conection', async function() {
    const result = await context.isConected()
    const expected = 'Conectado'

    assert.deepEqual(result, expected)
  })

  it('Should create', async function () {
    const { brand, color } = await context.create(MOCK_GUITAR_CREATE)
    assert.deepEqual({ brand, color}, MOCK_GUITAR_CREATE)
  })

  it('Should list', async function () {
    // const [pos1, pos2, pos3] = await context.read({ param })
    const [{brand, color}] = await context.read({ brand: MOCK_GUITAR_DEFAULT.brand })
    const result = { brand, color }
    assert.deepEqual(result, MOCK_GUITAR_DEFAULT)
  })

  it.only('Should update', async function () {
    const result = await context.update(MOCK_GUITAR_ID, { brand: 'ATUALIZEI'})
    assert.deepEqual(result.modifiedCount, 1)
  }) 
})