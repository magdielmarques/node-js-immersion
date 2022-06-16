const { readFile } = require('fs'); // read the file
const { promisify } = require('util'); // transform the callback function to promise

const readFileAsync = promisify(readFile);
/**
 * another way to get data of json file
 * const dataJson = require('eletric_guitar.json')
 */

class Database {
  constructor(FILE_PATH) {
    // this.FILE_PATH = FILE_PATH
    this.FILE_PATH = 'eletric_guitar.json'
  } 

  async getData() {
    const result = await readFileAsync(this.FILE_PATH, 'utf8') 
    return JSON.parse(result) // add to string later 
  }
  create() {
    
  }
  async readById (id) {
    const result = await getData()
    return result.filter(item => id ? item.id === id : true) // will return every guitars if doesn't exist id
  }
}

module.exports = new Database();