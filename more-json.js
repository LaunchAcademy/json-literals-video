/*
# Learning Goals

- Define objects with the `new Object()` invocation
- Define objects with object literal syntax (JSON)
- Read and assign properties using dot syntax
- Read and assign properties using bracket syntax
- Define a method for a JSON object
- Enumerate the properties of a JSON object

*/

let summarize = (person) => {
  console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`)
}

let firstPerson = {
  firstName: 'Jon',
  lastName: 'Snow',
  age: 22
}

// summarize(firstPerson)

let maxima = {
  make: 'Nissan',
  model: 'Maxima',
  year: 2012,
  price: 4999,
  saleSummary() {
    return `\$${this.price} - ${this.year} ${this.make} ${this.model}`
  }
}

let jetta = {
  make: 'Volkswagen',
  model: 'Jetta',
  year: 2014,
  price: 6450,
  saleSummary() {
    return `\$${this.price} - ${this.year} ${this.make} ${this.model}`
  }
}
