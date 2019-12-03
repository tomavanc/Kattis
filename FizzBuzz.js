const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  let nums = line.split(' ');
  let a = parseInt(nums[0]);
  let b = parseInt(nums[1]);
  let c = parseInt(nums[2]);
  
  fizzBuzz(a, b, c);
});


function fizzBuzz(x, y, z) {
  for(let i = 1; i <= z; i++) {
    if (i % x === 0 && i % y === 0) {
      console.log('FizzBuzz\n');
    } else if (i % x === 0) {
      console.log('Fizz\n');
    } else if (i % y === 0) {
      console.log('Buzz\n');
    } else {
      console.log(i + '\n');
    }
  }
}