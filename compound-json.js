/*
# Learning Goals
- Define a property on a JSON object that is an array
- Define a property on a JSON object that is an object
*/

let maxima = {
  make: 'Nissan',
  model: 'Maxima',
  year: 2012,
  price: 4999,
  saleSummary() {
    return `\$${this.price} - ${this.year} ${this.make} ${this.model}`
  }
}

let features = [
  'power roof',
  'power windows',
  'thermostat control'
]

maxima.features = features

let owner = {
  firstName: 'James',
  lastName: 'Gordon'
}

maxima.owner = owner
debugger
