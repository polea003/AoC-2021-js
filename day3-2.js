const fs = require('fs')

var bit_strings = fs.readFileSync('data/day3.data', 'utf8').split('\n')

var oxygen = bit_strings
var co2 = bit_strings

most_common_bits = []
least_common_bits = []
console.log(bit_strings.length)

var i = 0
while (oxygen.length > 1) {
    var num_true = 0
    var num_false = 0
    oxygen.forEach(bit_string => {
        if (bit_string[i] === '1') {
            num_true++
        } else {
            num_false++
        }
    })
    oxygen = oxygen.filter(bit_string => bit_string[i] === (num_true >= num_false ? '1' : '0'))
    i++
}

i = 0
while (co2.length > 1) {
    var num_true = 0
    var num_false = 0
    co2.forEach(bit_string => {
        if (bit_string[i] === '1') {
            num_true++
        } else {
            num_false++
        }
    })
    co2 = co2.filter(bit_string => bit_string[i] === (num_true >= num_false ? '0' : '1'))
    i++
}
console.log(least_common_bits.join(''))
console.log(co2[0])




var gamma = parseInt(oxygen[0],2)
var epsilon = parseInt(co2[0],2)

console.log(gamma * epsilon)