const service = require('../data/service.js')

const main = async () => {
  try {
    const result = await service.getPeople('a')

    const names = []

    console.time('tempo de execucao no FORIN')
    for (let i in result.results) {
      const eachResult = result.results[i]
      names.push(eachResult.name)
    }
    console.timeEnd('tempo de execucao no FORIN')

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