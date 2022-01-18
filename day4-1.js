const fs = require('fs')

let read_lines = fs.readFileSync('data/day4.data', 'utf8').split('\n\n')

console.log(read_lines.slice(0,5))

picked_numbers = read_lines.shift().split(' ')

let boards = read_lines.map(line => line.replaceAll('  ', ' ').split('\n')).map(board => board.map(line => line.split(' ')))

for(let board of boards) {

}

console.log(boards)