
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


const fizzBuzz = function (input) {

  for (let index = 0; index < input.length; index++) {
    if (input[index] % 3 === 0 && input[index] % 5 === 0) {
      input[index] = {
        value: input[index],
        messages: ['Fizz', 'Buzz']
      }
    } else if (input[index] % 3 === 0) {
      input[index] = {
        value: input[index],
        messages: ['Fizz']
      }
    } else if (input[index] % 5 === 0) {
      input[index] = {
        value: input[index],
        messages: ['Buzz']
      }
    } else {
      input[index] = {
        value: input[index],
        messages: []
      }
    }
    
  }

  return input
}

module.exports = fizzBuzz
