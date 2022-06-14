const service = require('./service.js')

const main = async () => {
  try {
    const result = await service.getPeople('r2')
    console.log(result)
  } catch (error) {
    console.error('Algo nao saio como espera.', error)
  }
}

module.exports = {
  main
}