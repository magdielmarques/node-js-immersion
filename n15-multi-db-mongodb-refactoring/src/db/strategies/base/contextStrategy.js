class ContextStrategy {
  constructor(strategy) {
    this._database = strategy
  }

  create(item) {
    return this._database.create(item)
  }

  read(item, skip, limit) {
    return this._database.read(item, skip, limit)
  }

  update(id, item) {
    return this._database.update(id, item)
  }

  delete(id) {
    return this._database.delete(id)
  }

  isConected() {
    return this._database.isConected()
  }

  static connect() {
    return this._database.connect()
  }
}

module.exports = ContextStrategy