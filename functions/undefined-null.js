// Undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)
}
// Undefined for function arguments
// Undefined as function return value
let square = function(num) {
    console.log(num)
}

let result = square()
console.log(result)
// null is meant to be assigned
// Undefined lets us know it was never given a value
let age = 27
age = null
console.log(age)
