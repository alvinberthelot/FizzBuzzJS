const expect = require('chai').expect;

const average = require('../average')

describe('average', function() {

  it('average with numbers should return the average', function() {

    const input = [4, 6, 2]
    const output = 4

    expect(average(input)).to.be.eql(output);
  });

});