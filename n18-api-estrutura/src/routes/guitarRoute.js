const BaseRoute = require('./base/baseRoute')

class GuitarRoute extends BaseRoute {
  constructor(db) {
    super()
    this.db = db
  }

  list() {
    return { 
      path: '/guitar',
      method: 'GET',
      handler: (req, headers) => { // Hapi já trabalha com Promise, assim não é necessário adicionar o await
        return this.db.read()
      }
    }
  }
}

module.exports = GuitarRoute