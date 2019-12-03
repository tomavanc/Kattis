const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input= [];

rl.on('line', (line) => {
  input = line.split(' ');
  let people = parseInt(input[0]);
  let chickens = parseInt(input[1]);
  let diff = chickens - people;

  if (diff > 1) {
    console.log(`Dr. Chaz will have ${diff} pieces of chicken left over!`);
  } else if (diff === 1) {
    console.log(`Dr. Chaz will have ${diff} piece of chicken left over!`);
  } else if (diff === -1) {
    console.log(`Dr. Chaz needs ${Math.abs(diff)} more piece of chicken!`);
  } else {
    console.log(`Dr. Chaz needs ${Math.abs(diff)} more pieces of chicken!`);
  }
});
