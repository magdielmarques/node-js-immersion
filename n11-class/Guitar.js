class Guitar {
  constructor(brand) {
    this._brand = brand
  }

  set brand(value) {
    this._logValueUppercase(value)
  }

  get brand() {
    return console.log(`You're getting brand of class guitar`)
  }

  _logValueUppercase(value) {
    console.log(value.toUpperCase());
    return value
  }

  play() {
    return console.log('Guitar playing');
  }
}

class Player extends Guitar {
  constructor(name, brand) {
    super(brand)
    this._name = this._logValueUppercase(name)
  }
}

const player = new Player('Magdiel')