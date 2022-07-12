const ICrud = require('./interfaces/interfaceCrud')

class PostgresDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('Novo item criado em PostgresDB -> ', item)
  }
}

module.exports = PostgresDB