
const getUsers = require('./getUsers')
const average = require('./average')

const program = function (users) {
  // const users = getUsers()

  const numbers = []
  for (let i = 0; i < users.length; i++) {
    numbers.push(users[i].money);
  }
  const avg = average(numbers)


  return {
    poor: getUsers(users, function (user) { return user.money < avg }),
    rich: getUsers(users, function (user) { return user.money > avg }),
  }
}

var poorPeople = []
var richPeople = []

console.log('Poor people are :')
for (let index = 0; index < poorPeople.length; index++) {
  console.log(poorPeople[index].name)
}

console.log('Rich people are :')
for (let index = 0; index < richPeople.length; index++) {
  console.log(richPeople[index].name)
}



module.exports = program
