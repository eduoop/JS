var person = {
    name: 'Eduardo',
    heigth:75.5
}

// Object.freeze(person)

var any = {
    age: 17
}

person = Object.assign(person, any)

console.log(person)

