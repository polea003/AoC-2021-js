const fs = require('fs')


var depths = fs.readFileSync('data/day1.data', 'utf8').split('\n')

var sliding_windows = []

const reducer = (previousValue, currentValue) => parseInt(previousValue) + parseInt(currentValue);

for (var i = 0; i < depths.length - 2; i++) {
    sliding_windows.push(depths.slice(i, i + 3).reduce(reducer))
}

var total_increases = 0
for (var i = 1; i < sliding_windows.length; i++) {
    if (parseInt(sliding_windows[i]) > parseInt(sliding_windows[i-1])) {
      total_increases++
    }
}
console.log(total_increases)