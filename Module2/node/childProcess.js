//  let cp = require('child_process');


//  cp.execFileSync("open -a Calculator");



// let os = require('os');
// console.log(os.userInfo());


let cp = require('child_process');
// console.log(cp.execSync('open -a Calculator'));

let contest = cp.execSync("node test.js");
//execSync : Run Your Command in Terminal through NodeJS

console.log(contest);

