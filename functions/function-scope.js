//Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
  // Local scope (fahrenheit, celsius)

// functions create a local scope as well as if statements

let convertFahrenheitToCelsius = function(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

    if (celsius <= 0) {
        let isFreezing = true
    }

  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne);
console.log(tempTwo);
