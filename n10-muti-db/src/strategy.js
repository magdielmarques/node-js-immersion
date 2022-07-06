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

// fake implementation of interface
class ContextStrategy extends ICrud { // strategy of database

}