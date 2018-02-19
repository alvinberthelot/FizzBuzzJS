
const fizzBuzz = function (input) {

  for (let index = 0; index < input.length; index++) {
    if (input[index] % 3 === 0 && input[index] % 5 === 0) {
      input[index] = 'FizzBuzz'
    } else if (input[index] % 3 === 0) {
      input[index] = 'Fizz'
    } else if (input[index] % 5 === 0) {
      input[index] = 'Buzz'
    }
  }

  return input
}

module.exports = fizzBuzz
