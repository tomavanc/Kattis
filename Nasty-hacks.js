const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0,
    cases;

rl.on('line', (line) => {
  count++;
  
  if (count > 1) {
    cases = line.split(' ');
    let first = Number(cases[0]);
    let second = Number(cases[1]);
    let third = Number(cases[2]);

    if ((first+third) == second) {
      console.log('does not matter');
    } else if ((first+third) > second) {
      console.log('do not advertise');
    } else {
      console.log('advertise');
    }
  }
});
