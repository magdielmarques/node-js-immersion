// very simple service using common js and axio
const axios = require('axios');
const URL = `https://swapi.dev/api/people`

const getPeople = async (name) => {
  const url = `${URL}/?search=${name}&format=json`
  const response = await axios.get(url)
  return response.data
}

// getPeople('r2')
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err))
//   .finally(() => console.log('Busca finalizada!'))

module.exports = {
  getPeople
}