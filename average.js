
const average = function (input) {
  var sum = 0
  for (let i = 0; i < input.length; i++) {
    sum += input[i]
  }
  return sum / input.length
}

module.exports = average
