const service = require('../data/service.js')

Array.prototype.myMap = function (callback) { // Nao funciona com Arrow Functions
  const newArrayMapped = []

  for (let i = 0; i <= this.length - 1; i++) { // this.legth se refere ao tamanho da lista
    const result = callback(this[i], i)
    newArrayMapped.push(result)
  }
  
  return newArrayMapped;
}

const main = async () => {
  try {
    const result = await service.getPeople('a')

    console.time('tempo de execucao no MY MAP')
    const names = result.results.myMap((eachResult, i) => `[${i}] ${eachResult.name}`)
    console.timeEnd('tempo de execucao no MY MAP')

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