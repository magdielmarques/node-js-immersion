class NotImplementedException extends Erro {
  constructor() {
    super('New message added with extends class: Not Implemented Exception!')
  }
} 

// fake interface
class ICrud {
  create(item) {
    throw new NotImplementedException()
  }

  read(query) {
    throw new NotImplementedException()
  }

  update(id, item) {
    throw new NotImplementedException()
  }

  delete(id) {
    throw new NotImplementedException()
  }
}

// extended class with data base strategy
class MongoBD extends ICrud { // will get an CRUD
  constructor () {
    super()
  }

  create(item) {
    console.log('O item foi salvo em MongoBD');
  }
}

// fake implementation of interface
class ContextStrategy { // strategy of database
  constructor(strategy) {
    this._database = strategy
  }
  
  create(item) {
    return this._database.create(item)
  }
  read(item)  {
    return this._database.read(item)
  }
  update(id, item) {
    return this._database.update(id, item)
  }
  delete(id) {
    return this._database.delete(id)
  }
}
