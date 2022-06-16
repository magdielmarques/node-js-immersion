const assert = require('assert');
const { getPeople } = require('./service.js');

describe('Search in Star Wars API', () => {
  it('should find correctly the array', async () => {
    const expected = 
    [{
      name: 'r2-d2',
      height: '96',
    }]
    const mockParams = 'r2-d2'
    const result = await getPeople(mockParams)
    assert.deepEqual(result, expected)
  })
})