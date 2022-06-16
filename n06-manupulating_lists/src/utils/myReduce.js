const { getPeople } = require('../data/service.js')

Array.prototype.myReduce = function(callback) {
  let result = 0;
  for (let index = 0; index < this.length; index++) {
    if (index === 0) continue;
    returnedValue = callback(this[index - 1], this[index])
    result += returnedValue
  }

  return result
}

const main = async () => {
  try {
    const { results } = await getPeople('a')
    // console.log('results - ', results);

    console.time('tempo de execucao no MY REDUCE')
    
    const height = results.map(item => parseInt(item.height))
    console.log('height - ', height);

    const addedHeight = height.myReduce((previousValue, currentValue) => previousValue + currentValue)
    console.log('addedHeight - ', addedHeight);
    
    console.timeEnd('tempo de execucao no MY REDUCE')
  } catch (error) {
    console.error('Algo nao saio como espera.', error)
  } finally {
    console.log('Finalizando execucao!')
  }
}

module.exports = {
  main
}