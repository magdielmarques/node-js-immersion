const Commander = require('commander');

const main = async () => {
  Commander
    .version('v1 do Magdiel')

    .parse(process.argv) // get everything typed of user
}

main()