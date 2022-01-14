const fs = require('fs')


var depths = fs.readFileSync('data/day1.data', 'utf8').split('\n')

var total_increases = 0
for (var i = 1; i < depths.length; i++) {
    if (parseInt(depths[i]) > parseInt(depths[i-1])) {
      total_increases++
    }
}
console.log(total_increases)