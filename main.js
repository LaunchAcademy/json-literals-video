/*
# Learning Goals

- Define objects with the `new Object()` invocation
- Define objects with object literal syntax (JSON)
- Read and assign properties using dot syntax
- Read and assign properties using bracket
- Define a method for a JSON object
- Enumerate the properties of a JSON object

*/

// let firstPerson = ['Jon', 'Snow']
// let firstPerson = new Object()
// firstPerson.firstName = 'Jon'
// firstPerson.lastName = 'Snow'

let summarize = (person) => {
  console.log(`${person.firstName} ${person.lastName} is ${person.age} years old`)
}

let firstPerson = {
  firstName: 'Jon',
  lastName: 'Snow',
  age: 22
}

let secondPerson = {
  firstName: 'Arya',
  lastName: 'Stark',
  age: 15
}

summarize(firstPerson)
firstPerson.age = 25
firstPerson["age"] = 30
firstPerson["firstName"] = "John"
summarize(firstPerson)



// summarize(secondPerson)
