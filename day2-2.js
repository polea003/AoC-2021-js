const fs = require('fs')

var commands = fs.readFileSync('data/day2.data', 'utf8').split('\n')

var aim = 0
var depth = 0
var horizontal = 0

commands.forEach(command => {
    var direction = command.split(' ')[0]
    var distance = parseInt(command.split(' ')[1])
    switch (direction) {
        case 'forward':
            horizontal += distance
            depth += (aim * distance)
            break
        case 'down':
            aim += distance
            break
        case 'up':
            aim -= distance
            break
    }
})

console.log(depth)
console.log(horizontal)
console.log(depth * horizontal)