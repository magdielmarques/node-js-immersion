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
    const state = STATE[connection.readyState]
    if(state === 'Conectado') return state

    if(state !== 'Conectando') return state

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return STATUS[connection.readyState]
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
    mongoose.connect(URI, (error) => {
      if (!error) return;
      console.error("Falha na conexão! \n \n", error);
    });
    const connection = mongoose.connection;
    connection.once("open", () => console.log("database rodando!"));
  }

  create(item) {
    return model.create({
      brand: "Fender",
      color: "Red",
    });
  }
}

module.exports = MongoDB