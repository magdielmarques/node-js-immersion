const { deepEqual, ok } = require('assert');
const service = require('./database/index.js');

const DEFAULT_VALUE_EXPECTED = {
  id: 1,
  name: 'Fender',
  color: 'black'
}

const DEFAULT_VALUE_UPDATE = {
  id: 2, 
  name: 'Strinberg', 
  color: 'red'
}

describe('Suite manipulation of eletric guitar', () => {
  before(async () => {
    await service.create(DEFAULT_VALUE_EXPECTED)
  })

  it('Should create new eletric guitar', async () => {
    const expected = {
      ...DEFAULT_VALUE_EXPECTED,
      id: 12431
    }
    const result = await service.create(expected)
    const [actual] = await service.readById(expected.id)

    deepEqual(actual, expected)
  })

  it('Should read eletric guitars by id', async () => {
    const expected = DEFAULT_VALUE_EXPECTED
    const [result] = await service.readById(expected.id) // destructure to get first position of array 
    deepEqual(result, expected)
  })

  it('Should delete by id eletric guitar or delete all', async () => {
    const expected = true
    const result = await service.delete(1)
    deepEqual(result, expected) 
  })

  it('Should update by id eletric guitar', async () => {

  })
})