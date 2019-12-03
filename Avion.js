const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input = [];

rl.on('line', (line) => {
  input.push(line);
});

rl.on('close', () => {
  let count = 1;
  let match = false;
  
  input.forEach(i => {
    if (i.match(/FBI/g)) {
      console.log(count + ' ');
      match = true;
    }
    count++;
  });

  if (count > input.length && match === false) console.log('HE GOT AWAY!');
});
