const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var input = [],
    solved = [];

rl.on('line', (line) => {
  if (line !== -1) {
    let l = line.split(' ');
    let minutes = parseInt(l[0]);
    let problem = l[1];
    let result = l[2];

    input.push({ 
      minutes: minutes, 
      problem: problem,
      result: result
    });

    if (result === 'right') {
      solved.push(problem);
    }
  }
});

rl.on('close', function() {
  let result = 0;
  
  input.forEach(i => {
    if (solved.includes(i.problem) && i.result === 'wrong') {
      result += 20;
    } else if (solved.includes(i.problem)) {
      result += i.minutes;
    }
  });
  
  console.log(`${solved.length} ${result}`);
});