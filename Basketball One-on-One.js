const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input, scoreA = 0, scoreB = 0;

rl.on('line', (line) => {
  input = line.match(/.{2}/g);
});

rl.on('close', () => {
  input.forEach(el => {
    el.match(/A/g)
      ? scoreA += Number(el.match(/\d/g))
      : scoreB += Number(el.match(/\d/g));
  });
  
  scoreA > scoreB
    ? console.log('A')
    : console.log('B');
});
