const { getPeople } = require('../data/service.js')

const main = async () => {
  try {
    const { results } = await getPeople('a')
    console.time('tempo de execucao no FILTER')
      const familyLars = results.filter((item) => {
        /** should return true or false to include items into new const */
        /** indexOf return -1 if false */
        result = item.name.toLowerCase().indexOf('lars') !== -1 
        return result 
      })
      const names = familyLars.map(item => item.name)
    console.timeEnd('tempo de execucao no FILTER')

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