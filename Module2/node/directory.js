//CREATING OWN DIRECTORY USING NODE JS

let fs = require('fs');

//mkdirSync : Create a Directory if it not exist else it will throw error if directory already exist

//CREATE A DIRECTORY
if(fs.existsSync('OurDirectory') == false)
    fs.mkdirSync("OurDirectory"); 



    //READ A DIRECTORY
let contentOfFolder  = fs.readdirSync("/Users/siddhantjaiswal/Desktop/FJP - MERN/Module1");
// console.log(contentOfFolder);


//DELETE A DIRECTORY
fs.rmSync('OurDirectory',{recursive: true});