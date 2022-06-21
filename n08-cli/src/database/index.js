const { readFile, writeFile } = require('fs'); // read the file
const { promisify } = require('util'); // transform the callback function to promise

/**
 * another way to get data of json file
 * const dataJson = require('eletric_guitar.json')
 */

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);
class Database {
  constructor(FILE_PATH) {
    this.FILE_PATH = FILE_PATH
    // this.FILE_PATH = 'src/database/electric_guitar.json'
  } 

  async getData() {
    const result = await readFileAsync(this.FILE_PATH, 'utf8')
    return JSON.parse(result.toString())
  }

  async writeData(data) {
    await writeFileAsync(this.FILE_PATH, JSON.stringify(data))
    return true
  }

  async create(guitar) {
    const data = await this.getData();
    const id = Date.now()

    const guitarWithNewId = {
      id,
      ...guitar
    }

    const finalData = [
      ...data,
      guitarWithNewId
    ]
    const result = await this.writeData(finalData)
    return result
  }
  async readById(id) {
    const result = await this.getData()
    return result.filter((item) => id ? item.id === id : true) // will return every guitars if doesn't exist id
  }
}

module.exports = new Database('src/database/electric_guitar.json');
