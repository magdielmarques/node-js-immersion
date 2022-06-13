const EventEmitter = require('events')
class MyEmitter extends EventEmitter {
  // extends class atribute  
}

const myEmitter = new MyEmitter()
const nameOfEvent = 'user:click'

myEmitter.on(nameOfEvent, (click) => {
  console.log('Some new click', click)
})

/*
myEmitter.emit(nameOfEvent, 'in new buttom')
let count = 0;
setInterval(() => {
  myEmitter.emit(nameOfEvent, `in new buttom blue number ${count++}.`)
}, 1000)
*/

const stdin = process.openStdin()

stdin.addListener('data', (value) => {
  console.log(`You're typping ${value.toString().trim()}`);
})

/* 

// some common problem below

const main = () => {
  return new Promise((resolve, reject) => {
    stdin.addListener('data', (value) => {
      return resolve(value)
    })
  })
}

main().then((result) => console.log('You are typping', result.toString().trim()));

*/