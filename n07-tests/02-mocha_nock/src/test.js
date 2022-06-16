const assert = require('assert');
const { getPeople } = require('./service.js');
const nock = require('nock');

describe('Search in Star Wars API', () => {
  before(() => {
    const response = {
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, blue',
            eye_color: 'red',
            birth_year: '33BBY',
            gender: 'n/a',
            homeworld: 'https://swapi.dev/api/planets/8/',
            films: [],
            species: [],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:11:50.376000Z',
            edited: '2014-12-20T21:17:50.311000Z',
            url: 'https://swapi.dev/api/people/3/'
          }
        ]
    }

    nock('https://swapi.dev/api/people').get('/?search=r2-d2&format=json').reply(200, response)
  })

  it('should find correctly the array', async () => {
    const expected = 
    [{
      name: 'R2-D2',
      height: '96',
    }]
    const mockParams = 'r2-d2'
    const result = await getPeople(mockParams) // with nock it get a response of function before
    assert.deepEqual(result, expected)
  })
})

// before nock fw: ✔ should find correctly the array (1374ms)
// after nock fw:  ✔ should find correctly the array