const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var res = 0;

rl.on('line', (line) => {
  let t = 0, c = 0, g = 0;
  let arr = line.split('');

  arr.forEach(card => {
    if (card === 'T') {
      t++;
    } else if (card === 'C') {
      c++;
    } else if (card === 'G') {
      g++;
    }
  });

  let min = Math.min(t, g, c);
  if (min > 0) {
    res= 7 * min;
  }

  res += Math.pow(t, 2);
  res += Math.pow(c, 2);
  res += Math.pow(g, 2);
});

rl.on('close', function() {
  console.log(res);
});
