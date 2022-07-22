const assert = require('assert');
const Postgres = require('../db/strategies/postgres');
const Context = require('../db/strategies/base/contextStrategy');

const context = new Context(new Postgres())
const MOCK_GUITAR_CREATE = {
  brand: 'TAYLOR',
  color: 'BLACK'
} 
const MOCK_GUITAR_UPDATE = {
  brand: 'Taylor updated',
  color: 'Black updated'
}

describe.only('Postgres Strategy', function () {
  this.timeout(Infinity) 
  this.beforeAll(async function () {
    await context.connect()
    await context.delete()
    await context.create(MOCK_GUITAR_CREATE)
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
    // or
    // const [position1, position2] = ['is the first', 'is the second']
    assert.deepEqual(result, MOCK_GUITAR_CREATE)
  })

  it('Should update', async function () {
    const [itemUpdate] = await context.read({ brand: MOCK_GUITAR_CREATE.brand })
    const newItem = {
      ...MOCK_GUITAR_CREATE,
      brand: 'Taylor updated'
    }
    const [result] = await context.update(itemUpdate.id, newItem)
    const [itemUpdated] = await context.read({ id: itemUpdate.id })
    assert.deepEqual(itemUpdated.brand, newItem.brand)
    assert.deepEqual(result, 1)
  })

  it('Should delete', async function () {
    const [item] = await context.read({})
    const result = await context.delete(item.id)
    assert.deepEqual(result, 1)
  })
})