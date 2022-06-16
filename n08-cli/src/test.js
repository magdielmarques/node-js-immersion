const { deepEqual, ok } = require('assert');
const service = require('./database/index.js');

const DEFAULT_VALUE_EXPECTED = {
  id: 1,
  name: 'Fender',
  color: 'black'
}

describe('Suite manipulation of eletric guitar', () => {
  before(() => {

  })

  it('Should save new eletric guitar', async () => {
    const expected = DEFAULT_VALUE_EXPECTED

    ok(expected, expected)
  })

  it('Should read eletric guitars by id', async () => {
    const expected = DEFAULT_VALUE_EXPECTED
    const [result] = await service.readById(expected.id) // destructure to get first position of array 
    deepEqual(result, expected)
  })
})