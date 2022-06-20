const fs = require('fs')

let read_lines = fs.readFileSync('data/day5.data', 'utf8').split('\n')

console.log(read_lines.slice(0,5))

read_lines = read_lines.map(line => line.split(' -> ')).map(line => {
    const coord1 = line[0].split(',');
    const coord2 = line[1].split(',');
    return {
        coord1: {
            x: parseInt(coord1[0]),
            y: parseInt(coord1[1])
        },
        coord2: {
            x: parseInt(coord2[0]),
            y: parseInt(coord2[1])
        },
    }
})
console.log(read_lines)


let straightLines = read_lines.filter(line => {
    let { coord1, coord2 } = line;
    return coord1.x === coord2.x || coord1.y === coord2.y;
})

let diagonalLines = read_lines.filter(line => {
    let { coord1, coord2 } = line;
    return coord1.x !== coord2.x && coord1.y !== coord2.y;
})

diagonalLines = diagonalLines.map(line => {
    let { coord1, coord2 } = line;
    let max = coord1.x > coord2.x ? coord1.x : coord2.x;
    let min = coord1.x < coord2.x ? coord1.x : coord2.x;
    let yStart = coord1.x < coord2.x ? coord1.y : coord2.y;
    let axis = (coord1.y > coord2.y && coord1.x < coord2.x) || (coord1.y < coord2.y && coord1.x > coord2.x) ? -1 : 1;
    return {
        direction: 'diagonal',
        axis,
        max,
        min,
        yStart,
        coord1,
        coord2
    }
})

straightLines = straightLines.map(line => {
    let { coord1, coord2 } = line;
    let max
    let min
    let axis
    let direction = coord1.x === coord2.x ? 'vertical' : 'horizontal'
    if (direction === 'vertical') {
        max = coord1.y > coord2.y ? coord1.y : coord2.y;
        min = coord1.y < coord2.y ? coord1.y : coord2.y;
        axis = coord1.x
    } else {
        max = coord1.x > coord2.x ? coord1.x : coord2.x;
        min = coord1.x < coord2.x ? coord1.x : coord2.x;
        axis = coord1.y
    }
    return {
        direction,
        max,
        min,
        axis
    }
})


// console.log('straight lines')
// console.log(straightLines)

let board = new Array();

for (let i = 0; i < 1000; i++) {
    board[i] = new Array();
    for (let j = 0; j < 1000; j++) {
        board[i][j] = 0;
    }
}

for (const line of straightLines) {
    if (line.direction === "vertical") {
        for (let i = line.min; i <= line.max; i++) {
           board[line.axis][i]++;
        }
    } else {
        for (let i = line.min; i <= line.max; i++) {
           board[i][line.axis]++;
        }
    }
}

for (const line of diagonalLines) {
    let increment = 0
    if (line.axis === 1) {
        for (let i = line.min; i <= line.max; i++) {
            board[i][line.yStart + increment]++;
            increment++;
        }
    } else {
        for (let i = line.min; i <= line.max; i++) {
            board[i][line.yStart - increment]++;
            increment++;
        }
    }
}


let numOnes = 0;
for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
       if (board[i][j] >= 2) {
        numOnes++;
       } 
    }
}

console.log(numOnes);