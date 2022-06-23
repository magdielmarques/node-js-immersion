const Commander = require('commander');
const service = require('./database/index');

const main = async () => {
  Commander
    .version('v1 project by Magdiel') // set version og my project
      .option('-n, --name [value]', "Name of eletric guitar") // option to insert value
      .option('-l, --color [value', "Name of color") // option to insert value

      .option('-c, --create', "Create an new eletric guitar") // option of CRUD

    .parse(process.argv) // get everything typed of user

    try {
      if(Commander.c) {
        console.log(Commander);
        // const result = await service.create()
      }
    } catch (error) {
      throw new Error(error)
    }
}

main()