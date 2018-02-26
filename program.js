
const getUsers = require('./getUsers')
const average = require('./average')

const program = function () {

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
