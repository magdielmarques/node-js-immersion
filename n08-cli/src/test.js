const { deepEqual, ok } = require('assert');

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

    ok(null, expected)
  })
})