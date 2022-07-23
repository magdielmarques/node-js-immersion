const ICrud = require('../interfaces/interfaceCrud')
const mongoose = require('mongoose')

const STATE = {
  0: 'Desconectado',
  1: 'Conectado',
  2: 'Conectando',
  3: 'Desconectado',
}
class MongoDB extends ICrud {
  constructor(connection, schema) {
    super()
    this._schema = schema
    this.connection = connection
  }
  async isConected() {
    const state = STATE[this.connection.readyState]
    if(state === 'Conectado') return state

    if(state !== 'Conectando') return state

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return STATUS[this.connection.readyState]
  }

  static connect() {
    const URI = "mongodb://localhost:27017/mongodb-estudo";
    mongoose.connect(URI, (error) => {
      if (!error) return;
      console.error("Falha na conexão! \n \n", error);
    });
    const connection = mongoose.connection;
    connection.once("open", () => console.log("database rodando!"));
    return connection
  }

  create(item) {
    return this._schema.create(item)
  }

  read(item, skip = 0, limit = 10) {
    return this._schema.find(item).skip(skip).limit(limit)
  }

  update(id, item) {
    return this._schema.updateOne({ _id: id }, { $set: item })
  }

  delete(id) {
    return this._schema.deleteOne({ _id: id })
  }
}

module.exports = MongoDB