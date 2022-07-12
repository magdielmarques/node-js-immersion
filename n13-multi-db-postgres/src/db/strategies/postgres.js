const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')
class PostgresDB extends ICrud {
  constructor() {
    super()
    this._driver = null
    this._guitars = null
    this._connect()
  }
  async isConected() {
    try {
      await this._driver.authenticate()
      return true
    } catch (error) {
      console.log('fail', error)
      return false;
    }
  }
  async defineModel() { // definindo modelo
    this._guitars = driver.define('guitars', {
      id: {
        type: Sequelize.INTEGER, 
        required: true, 
        primaryKey: true,
        autoIncrement: true
      },
      brand: {
        type: Sequelize.STRING, 
        required: true
      },
      color: {
        type: Sequelize.STRING, 
        required: true      
      }
    }, 
    {
      tableName: 'TB_GUITARS', 
      freezeTableName: false,
      timestamps: false 
    })
    await Guitars.sync()
  }

  _connect() { //sinaliza metodo privado
    this._driver = new Sequelize(
      'estudo', 
      'magdielmarques', 
      'minhasenha',
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false, 
        operatorAliases: false, 
        omitNull: false 
      }
    )

  }

  create(item) {
    console.log('Novo item criado em PostgresDB -> ', item)
  }
}

module.exports = PostgresDB