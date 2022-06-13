const EventEmitter = require('events')
class MyEmitter extends EventEmitter {
  // extends class atribute  
}

const myEmitter = new MyEmitter()
const nameOfEvent = 'user:click'

myEmitter.on(nameOfEvent, (click) => {
  console.log('Some new click', click)
})

myEmitter.emit(nameOfEvent, 'in new buttom')