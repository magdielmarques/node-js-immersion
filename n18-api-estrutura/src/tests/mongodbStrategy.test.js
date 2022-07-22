const assert = require('assert');
const MongoDb = require('../db/strategies/mongodb/mongodb');
const GuitarSchema = require('./../db/strategies/mongodb/schemas/guitarSchema');
const Context = require('../db/strategies/base/contextStrategy');

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

let context = {}
describe('MongoDB Strategy', function() {
  this.beforeAll(async function() {
    const connection = MongoDb.connect()
    context = new Context(new MongoDb(connection, GuitarSchema))
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

  it('Should update', async function () {
    const result = await context.update(MOCK_GUITAR_ID, { brand: 'ATUALIZEI'})
    assert.deepEqual(result.modifiedCount, 1)
  })
  
  it('Should delete', async function () {
    const result = await context.delete(MOCK_GUITAR_ID)
    assert.deepEqual(result.deletedCount, 1)
  })
})