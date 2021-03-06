const { Command } = require('commander');
const service = require('./database/index');
const Guitar = require('./guitar');

async function main () {
  const program = new Command()
  program
    .version('v1 project by Magdiel') // set version og my project
      .option('-N, --name [value]', "Name of eletric guitar") // option to insert value
      .option('-L, --color [value]', "Name of color") // option to insert value
      .option('-I, --id [value]', "ID of guitar") // option to insert value

      .option('-C, --create', "Create an new eletric guitar") // option of CRUD
      .option('-R, --read', "Read eletric all guitar") // option of CRUD
      .option('-U, --update [value]', "Update eletric guitar") // option of CRUD
      .option('-D, --delete', "Delete eletric guitar by ID") // option of CRUD
    
    program.parse(process.argv) // get everything typed of user
    
    const options = program.opts();
    const guitar = new Guitar(options)

    try {
      if(options.create){
        const result = await service.create(guitar)

        if (!result) {
          console.error('Error. Guitar not saved.')
          return
        }
        console.log('Success. New guitar saved.')
      }

      if(options.read){
        const result = await service.readById(guitar.id)
        
        if (!result) {
          console.error('Error. Guitar not found.')
          return
        } 
        console.table(result) 
      }

      if(options.delete){
        const result = await service.delete(guitar.id)
        if (!result) {
          console.error('Error. Guitar not deleted.')
          return
        }
        console.log('Success. Guitar deleted.')
      }

      if(options.update){
        const idGuitar = parseInt(options.update)
        delete guitar.id
        const data = JSON.stringify(guitar)
        const guitarToUpdate = JSON.parse(data)
        const result = await service.update(idGuitar, guitarToUpdate)

        if(!result) {
          console.error('Error. Guitar not updated.')
          return
        }
        console.table(guitar)
      }

    } catch (error) {
      throw new Error('Error, please try again.', error)
    }
}

main()