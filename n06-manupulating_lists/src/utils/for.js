const service = require('../data/service.js')

const main = async () => {
  try {
    const result = await service.getPeople('a')

    const names = []

    console.time('tempo de execucao no FOR')
    for (let i = 0; i <= result.results.length - 1; i++) {
      const eachResult = result.results[i];
      names.push(eachResult.name)
    }
    console.timeEnd('tempo de execucao no FOR')

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