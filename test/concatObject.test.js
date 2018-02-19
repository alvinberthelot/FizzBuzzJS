const expect = require('chai').expect;

const concatObject = require('../concatObject')

describe('concatObject', function() {

  it('concatObject should do the job', function() {
    const input1 = {
      name: "John",
      money: 300
    }
    const input2 = {
      name: "Jane",
      money: 500
    }
    const output = {
      names: ["John", "Jane"],
      money: 800
    }

    expect(concatObject(input1, input2)).to.be.eql(output);
  });

});