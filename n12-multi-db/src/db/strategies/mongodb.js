const ICrud = require('./interfaces/interfaceCrud')

class MongoDB extends ICrud {
  constructor() {
    super()
  }

  create(item) {
    console.log('Novo item criado em MongoBD -> ', item);
  }
}

module.exports = MongoDB