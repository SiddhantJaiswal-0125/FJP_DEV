//File - System Module 


let fs = require("fs");
// console.log(fs);

let path = require("path");
let filepath = path.join(__dirname, "testing.txt");
console.log(filepath);
//write file sync : first it will check that if the file already exist or not, if yes it will override else create and add the content.

fs.writeFileSync(filepath, "Hey there, Check it out!");

fs.appendFileSync(filepath, "adding new Elements");

fs.unlinkSync(filepath);





