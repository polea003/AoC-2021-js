const fs = require('fs')

let read_lines = fs.readFileSync('data/day4.data', 'utf8').split('\n\n')

// console.log(read_lines.slice(0,5))

picked_numbers = read_lines.shift().split(' ').join().split(',')

let boards = read_lines.map(line => 
    line.split('\n'))
    .map(board => 
        board.map(line => line.split(' ').filter(item => 
            item !== ''
            )
        )
    ).map(board => board.length > 5 ? board.slice(0,5) : board)

console.log('boards number: ')
console.log(boards.length)

let numWinners = 0
let found_flag = false
picked_numbers.forEach(number => {
    boards = boards.filter(board => !checkForWinner(board))
    boards.forEach(board => {
        if (numWinners < 100) {
            checkForNumber(number, board)
            // console.log(board)
            if (checkForWinner (board)) {
                numWinners++
                console.log(calculateScore(number, board))
            }
        }
    })
    console.log(boards.length)
})

// console.log(boards)


function checkForNumber (number, board) {
    board.forEach(line => {
        line.forEach((num, index) => {
            if (num === number) {
                line[index] = 'x'
            }
        })
    })
}

function checkForWinner (board) {
    for (let i = 0; i < 5; i++) {
        numX = 0
        numY = 0
        for (let j = 0; j < 5; j++) {
            if (board[i][j] === 'x') {
                numX++
            }
            if (board[j][i] === 'x') {
                numY++
            }
        }
        if (numX === 5 || numY === 5) {
            return true
        }
    }
    return false
}

function calculateScore (number, board) {
    let total = 0
    board.forEach(row => {
        row.forEach(item => {
            if (item !== 'x') {
                total += parseInt(item)
            }
        })
    })
    return total * number
}