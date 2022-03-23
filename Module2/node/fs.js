//File - System Module 


let fs = require("fs");
// console.log(fs);

let path = require("path");
let filepath = path.join(__dirname, "testing.txt");
console.log(filepath);
//write file sync :  first it will check that if the file already exist or not, if yes it will override else create and add the content.

//CREATE  
fs.writeFileSync(filepath, "HELLO SIDDHANT");

//READ
let content = fs.readFileSync(filepath, 'utf-8');


//REPLACING A PARTICULAR VALUE
let val = content.replace("SIDDHANT", "RAHUL") ;
fs.writeFileSync(filepath, val);


//UPDATE
fs.appendFileSync(filepath, "adding new Elements");

//DELETE
fs.unlinkSync(filepath);






