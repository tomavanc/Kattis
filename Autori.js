const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var names;

rl.on('line', (line) => {
  names = line.split('-');
  getFirstLetters(names);
});

function getFirstLetters(names) {
  let firstLetters = [];
  names.forEach(name => firstLetters.push(name[0]));
  console.log(firstLetters.join(''));
}
