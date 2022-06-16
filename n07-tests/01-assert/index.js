// simple file to use assert of NodeJS
const assert = require('assert') //common js

const value1 = 100
const value2 = 200

// assert.equal(value1, value2, 'should be equal')

try {
  assert.equal(value1, value2, 'should be equal')
} catch (error) {
  console.error(error)
} finally {
  console.log('Finzaliando execucao!')
}