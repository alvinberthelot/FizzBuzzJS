const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzz')

describe('FizzBuzz', function() {

  it('Should transform array with FizzBuzz', function() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    const output = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz',
      'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']

    expect(fizzBuzz(input)).to.be.eql(output);
  });

});