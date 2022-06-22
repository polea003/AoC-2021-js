const fs = require('fs');

let laternFish = fs.readFileSync('data/day6.data', 'utf8').split(',').map(item => parseInt(item));

console.log(laternFish);


for (let k = 0; k < 256; k++) {

    let numNewFish = 0;
    for (let fish in laternFish) {
        laternFish[fish]--;
        if (laternFish[fish] === -1) {
            laternFish[fish] = 6;
            numNewFish++;
        }
    }
    for (let i = 0; i < numNewFish; i++) {
        laternFish.push(8);
    }

console.log(laternFish.length);
}
