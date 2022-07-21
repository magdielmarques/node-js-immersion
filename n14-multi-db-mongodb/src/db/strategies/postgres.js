const ICrud = require('./interfaces/interfaceCrud')
const Sequelize = require('sequelize')
class PostgresDB extends ICrud {
  constructor() {
    super()
    this._driver = null
    this._guitars = null
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
    this._guitars = this._driver.define('guitars', {
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
    await this._guitars.sync()
  }

  async connect() { //sinaliza metodo privado
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
    await this.defineModel()
  }

  async create(item) {
    const { dataValues } = await this._guitars.create(item)
    return dataValues
  }

  async read(item = {}) {
    return await this._guitars.findAll({ where: item, raw: true })
  }

  async update(id, item) {
    return await this._guitars.update(item, { where: {id : id}})    
  }

  async delete(id) {
    const query = id ? { id } : {}
    return await this._guitars.destroy({where: query})
  }
}

module.exports = PostgresDB