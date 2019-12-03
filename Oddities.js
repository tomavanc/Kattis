const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0;

rl.on('line', (line) => {
  count++;
  
  if (count > 1) {
    if (line % 2 === 0) {
      console.log(line + ' is even');
    } else {
      console.log(line + ' is odd');
    }
  }
});
