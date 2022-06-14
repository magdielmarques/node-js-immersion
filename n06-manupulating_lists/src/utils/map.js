const service = require('../data/service.js')

const main = async () => {
  try {
    const result = await service.getPeople('a')

    console.time('tempo de execucao no MAP')
    const names = result.results.map((eachResult) => {
      return eachResult.name
    })
    console.timeEnd('tempo de execucao no MAP')

    console.log('names -> ', names)
  } catch (error) {
    console.error('Algo nao saio como espera.', error)
  } finally {
    console.log('Finalizando execucao!')
  }
}

module.exports = {
  main
}