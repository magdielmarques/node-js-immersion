class Guitar {
  constructor(brand) {
    this._brand = brand
  }

  set brand(value) {
    this._logValueUppercase(value)
    // this._brand = value.toUpperCase()
    // return console.log(this._brand);
  }

  get brand() {
    return console.log(`You're getting brand of class guitar`)
  }

  _logValueUppercase(value) {
    return console.log(value.toUpperCase());
  }

  play() {
    return console.log('Guitar playing');
  }
}

const guitar = new Guitar()
guitar.brand = 'fender' 
// guitar.brand 
