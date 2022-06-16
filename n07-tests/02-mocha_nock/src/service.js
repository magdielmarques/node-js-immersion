const { get } = require('axios');

const URL = 'https://swapi.dev/api/people';

const getPeople = async (name) => {
  const url = `${URL}/?search=${name}&format=json`
  const result = await get(url)
  return result.data.results.map(mapPeople)
  // return result.data.results.map(item => {
  //   return { 
  //     name: item.name,
  //     height: item.height
  //   }
  // })
}

const mapPeople = (item) => {
  return { 
    name: item.name.toLowerCase(), 
    height: item.height.toLowerCase()
  }
}

module.exports = {
  getPeople
}