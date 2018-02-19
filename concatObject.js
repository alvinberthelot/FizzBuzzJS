
const concatObject = function (input1, input2) {
  return {
    names: [input1.name, input2.name],
    money: input1.money + input2.money
  }
}

module.exports = concatObject
