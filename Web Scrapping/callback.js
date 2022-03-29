const fs = require('fs');

console.log("Before");
//asynchronos : it will call the Cb function at the end : kind of multithreading

fs.readFile("request.js",cb);
function cb(error, data)
{
    console.log(data+" Inside cb ");

}

console.log("AFTER");