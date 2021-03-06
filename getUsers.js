const USERS = [
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
const getUsers = function (users, predicate) {
  if (!predicate) {
    return users
  } else { 
    const output = []
    for (let i = 0; i < users.length; i++) {
      var user = users[i]
      if (predicate(user)) {
        output.push({
          name: user.name,
          money: user.money
        })
      }
    }
    return output
  }
}

module.exports = getUsers
