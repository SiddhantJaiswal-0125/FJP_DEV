//empty array
let ar = [] ;
console.log(ar);

//arrray with element
let ar1 = [1,2,3,"Hello, I am a String", false, 'c', 4.6]; //0 - Based  Indexing
console.log("Element before push")
console.log(ar1);

//PUSH : add element at last
ar1.push("siddhant");
console.log("Element after push")
console.log(ar1);


//POP : Remove element from last

console.log("Element before POP")
console.log(ar1);
ar1.pop();
console.log("Element after pop")
console.log(ar1);


//Shift : Remove starting element  {1,2,3,4}----> {2,3,4}
console.log("Element before Shift")
console.log(ar1);
ar1.shift();
console.log("Element after Shit")
console.log(ar1);


//UNSHIFT  : Add element at starting index - 0;
console.log("Element before Unshift")
console.log(ar1);
ar1.unshift("Newly added Item");
console.log("Element after Unshift")
console.log(ar1);