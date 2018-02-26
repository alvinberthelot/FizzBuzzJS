const expect = require('chai').expect;

const program = require('../program')

describe('program', function() {

  it('program should return poor and rich people', function() {

    const input = [
      { name: "User1", money: 5 },
      { name: "User2", money: 15 },
      { name: "User3", money: 3 },
      { name: "User4", money: 2 },
      { name: "User5", money: 7 },
      { name: "User6", money: 4 }
    ]

    const output = {
      poor: [
        { name: "User1", money: 5 },
        { name: "User3", money: 3 },
        { name: "User4", money: 2 },
        { name: "User6", money: 4 }
      ],
      rich: [
        { name: "User2", money: 15 },
        { name: "User5", money: 7 }
      ]
    }

    expect(program(input)).to.be.eql(output);
  });

});