const { getPeople } = require('../data/service.js')

const main = async () => {
  try {
    const { results } = await getPeople('a')
    // console.log('results - ', results);

    console.time('tempo de execucao no REDUCE')

    const height = results.map(item => parseInt(item.height))
    console.log('height - ', height);

    const addedHeight = height.reduce((oldValue, nextValue) => oldValue + nextValue)
    console.log('addedHeight - ', addedHeight);
    
    console.timeEnd('tempo de execucao no REDUCE')
  } catch (error) {
    console.error('Algo nao saio como espera.', error)
  } finally {
    console.log('Finalizando execucao!')
  }
}

module.exports = {
  main
}