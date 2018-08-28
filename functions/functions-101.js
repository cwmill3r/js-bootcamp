// functions - input(argument), code, output(return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    var result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

//convertFahrenheitToCelsius
// 32 -> 0 , 68 -> 20
// print

let convertFahrenheitToCelsius = function (num) {
    let celsius = ((num - 32) * 5) / 9
    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68);
console.log(tempOne)
console.log(tempTwo)












