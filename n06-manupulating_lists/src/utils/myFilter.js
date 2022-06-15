const { getPeople } = require('../data/service.js')

Array.prototype.myFilter = function (callback) {
  const filteredList = []
  for (index in this) {
    const item = this[index] // get the array of objects at position 
    const result = callback(item, index, this)
    if(!result) continue;
    filteredList.push(item)
  }
  return filteredList
}

const main = async () => {
  try {
    const { results } = await getPeople('a') // get one array of objects

    console.time('tempo de execucao no MY FILTER')
      const familyLars = results.myFilter((item) => {
        return item.name.toLowerCase().indexOf('lars') !== -1 
      })
      const names = familyLars.map(item => item.name)  
    console.timeEnd('tempo de execucao no MY FILTER')

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