// instalar orm -> npm i sequelize 
// installar driver do banco pos -> npm i pg-hstore

const Sequelize = require('sequelize')
const driver = new Sequelize(
  'estudo', //database
  'magdielmarques',   // usuario
  'minhasenha', // senha
  {
    host: 'localhost', //devido ao docker neste caso
    dialect: 'postgres',
    quoteIdentifiers: false, //ignorar case sensitive
    operatorAliases: false, // erros de deprecade ignorados
    omitNull: false //necessário para resolver id auto increment
  }
)

async function main() {
  const Guitars = driver.define('guitars', {
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
    timestamps: false // para nao criar automaticamente as propriedades de created at, etc
  })
  await Guitars.sync()

  const result = await Guitars.findAll({ raw: true})
  console.log('result', result);
}

main()