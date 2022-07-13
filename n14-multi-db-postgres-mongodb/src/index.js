const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/mongodb')
const PostgresDB = require('./db/strategies/postgres')

const contextMongo = new ContextStrategy(new MongoDB())
const contextPostgres = new ContextStrategy(new PostgresDB())

contextMongo.create('Magdiel')
// contextPostgres.create('Magdiel')
// contextPostgres.read()