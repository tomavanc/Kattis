const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var count = 0,
    result = [];

rl.on('line', (line) => {
  let nums,
      sum;
  
  count++;

  nums = line.split(' ');
  sum = nums.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  
  result.push({ pos: count, sum: sum });
});

rl.on('close', function() {
  let max = Math.max.apply(Math, result.map((arr) => { return arr.sum; }))
  
  result.forEach(res => {
    if (res.sum === max) {
      console.log(`${res.pos} ${max}`);
    }
  });
});