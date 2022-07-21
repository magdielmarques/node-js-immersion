const ICrud = require('./interfaces/interfaceCrud')
const mongoose = require('mongoose')

const STATE = {
  0: 'Desconectado',
  1: 'Conectado',
  2: 'Conectando',
  3: 'Desconectado',
}
class MongoDB extends ICrud {
  constructor() {
    super()
    this._guitar = null
    this._driver = null
  }
  async isConected() {
    const state = STATE[this._driver.readyState]
    if(state === 'Conectado') return state

    if(state !== 'Conectando') return state

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return STATUS[this._driver.readyState]
  }

  defineModel() {
    const guitarSchema = new mongoose.Schema({
      brand: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      insertedAt: {
        type: Date,
        default: new Date(),
      },
    });
    
    this._guitar = mongoose.model("guitar", guitarSchema);
  }

  connect() {
    const URI = "mongodb://localhost:27017/mongodb-estudo";
    mongoose.connect(URI, (error) => {
      if (!error) return;
      console.error("Falha na conexão! \n \n", error);
    });
    const connection = mongoose.connection;
    this._driver = connection;
    connection.once("open", () => console.log("database rodando!"));
    this.defineModel()
  }

  create(item) {
    return this._guitar.create(item);
  }

  read(item, skip=0, limit=10) {
    return this._guitar.find(item).skip(skip).limit(limit)
  }
}

module.exports = MongoDB