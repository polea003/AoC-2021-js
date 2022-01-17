const fs = require('fs')

var bit_strings = fs.readFileSync('data/day3.data', 'utf8').split('\n')

most_common_bits = []
least_common_bits = []

for (var i = 0; i < 12; i++) {
    var num_true = 0
    var num_false = 0
    for (var j = 0; j < bit_strings.length; j++) {
        switch (bit_strings[j][i]) {
            case '0':
                num_false += 1
                break
            case '1':
                num_true += 1
                break
        }
    }
    if (num_true > num_false) {
        most_common_bits.push('1')
        least_common_bits.push('0')
    } else {
        most_common_bits.push('0')
        least_common_bits.push('1')
    }
}
var gamma = parseInt(most_common_bits.join(''),2)
var epsilon = parseInt(least_common_bits.join(''),2)

console.log(gamma * epsilon)