const fs = require('fs');
let f1kaPromise = fs.promises.readFile('f1.txt');
console.log(f1kaPromise);

f1kaPromise.then(function(data, error){
    if(error)
        console.log(""+error);
    else
        console.log(" "+data);
});
console.log("After")