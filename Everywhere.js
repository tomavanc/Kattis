const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var count = 0, 
    cases = -1,
    testCases,
    input = [],
    flag = [];

rl.on('line', (line) => {
  count++;
  
  if (count === 1) {
    testCases = line;
  } else {
    if (testCases === 0) {
      console.log(0);
    } else {
      if (/^\d+$/.test(line)) {
        cases++;
        input[cases] = { workTrips: line, cities: [] };
      } else {
        if (flag[line]) return;
        input[cases].cities.push(line);
        flag[line] = true;
      }
    }
  }
});

rl.on('close', function() {
  input.forEach((i) => {
    console.log(i.cities.length);
  });
});
