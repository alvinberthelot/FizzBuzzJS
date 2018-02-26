const expect = require('chai').expect;

const getUsers = require('../getUsers')

describe('getUsers', function() {

  it('getUsers without money parameter should return all users', function() {

    const output = [
      { name: "John", money: 300 },
      { name: "Jane", money: 500 },
      { name: "Tom", money: 200 },
      { name: "Lucy", money: 800 },
      { name: "Hellboy", money: 666 },
      { name: "Bruce", money: 10 },
      { name: "Emma", money: 600 },
      { name: "Jack", money: 500 },
      { name: "Bob", money: 450 }
    ]

    expect(getUsers(output)).to.be.eql(output);
  });

  it('getUsers with money parameter should return filtered users', function() {

    const predicate = function (item) {
      return item.money > 400
    }

    const input = [
      { name: "John", money: 300 },
      { name: "Jane", money: 500 },
      { name: "Tom", money: 200 },
      { name: "Lucy", money: 800 },
      { name: "Hellboy", money: 666 },
      { name: "Bruce", money: 10 },
      { name: "Emma", money: 600 },
      { name: "Jack", money: 500 },
      { name: "Bob", money: 450 }
    ]

    const output = [
      { name: "Jane", money: 500 },
      { name: "Lucy", money: 800 },
      { name: "Hellboy", money: 666 },
      { name: "Emma", money: 600 },
      { name: "Jack", money: 500 },
      { name: "Bob", money: 450 }
    ]

    expect(getUsers(input, predicate)).to.be.eql(output);
  });

});