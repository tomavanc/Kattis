const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0,
    result = 0;

rl.on('line', (line) => {
  count++;
  
  if (count > 1) {
    let pow = line.slice(-1);
    let num = line.substring(0, line.length - 1)
    result += Math.pow(num, pow);
  }
});

rl.on('close', function() {
  console.log(result);
});
