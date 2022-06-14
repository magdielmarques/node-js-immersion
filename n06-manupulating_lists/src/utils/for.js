const service = require('../data/service.js')

const main = async () => {
  try {
    const result = await service.getPeople('r2')
    console.log(result)
  } catch (error) {
    console.error('Algo nao saio como espera.', error)
  } finally {
    console.log('Finalizando execucao!')
  }
}

module.exports = {
  main
}