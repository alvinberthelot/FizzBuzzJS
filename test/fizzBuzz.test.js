const expect = require('chai').expect;

const fizzBuzz = require('../fizzBuzz')

describe('FizzBuzz', function() {

  it('Should transform array with FizzBuzz', function() {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9,
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] 
    const output = [
      { value: 1, messages: []},
      { value: 2, messages: []},
      { value: 3, messages: ['Fizz']},
      { value: 4, messages: []},
      { value: 5, messages: ['Buzz']},
      { value: 6, messages: ['Fizz']},
      { value: 7, messages: []},
      { value: 8, messages: []},
      { value: 9, messages: ['Fizz']},
      { value: 10, messages: ['Buzz']},
      { value: 11, messages: []},
      { value: 12, messages: ['Fizz']},
      { value: 13, messages: []},
      { value: 14, messages: []},
      { value: 15, messages: ['Fizz', 'Buzz']},
      { value: 16, messages: []},
      { value: 17, messages: []},
      { value: 18, messages: ['Fizz']},
      { value: 19, messages: []},
      { value: 20, messages: ['Buzz']}
    ]
    expect(fizzBuzz(input)).to.be.eql(output);
  });

});