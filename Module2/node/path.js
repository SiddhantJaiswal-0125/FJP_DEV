// "/Users/siddhantjaiswal/Desktop/FJP - MERN/Module2/javascript1/functions.js";

let path = require('path');
let extensionname = path.extname("/Users/siddhantjaiswal/Desktop/FJP - MERN/Module2/javascript1/functions.js");
console.log(extensionname);

let basename = path.basename(__filename);
let newFile = path.join(__dirname, "test.js");
console.log(newFile);


// console.log(path.basename("/Users/siddhantjaiswal/Desktop/FJP - MERN/Module2/javascript1/functions.js"));
