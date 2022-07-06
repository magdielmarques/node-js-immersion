// classic way
class Person {
  constructor(name, age) { // atributes
    this._name = name
    this._age = age
  } 

  set name(value) { // can get parameter
    // this._name = value
    // console.log(`What happens when you try put some value into that atribute ->`, value)
    this._name = value.toUpperCase() // example
    return console.log(this._name);
  }

  set age(value) {
    console.log(`What happens when you try put some value into that atribute ->`, value)
  }

  get name() { // can't get parameter
    return console.log(`You're trying get some value here, so i can do something`)
  }

  walk() { //methods
    return console.log(`${this._name} is walking.`);
  }
}

const person = new Person()
// example using set
person.name = 'Magdiel'
// person.age = 24

// example using get
// person.name