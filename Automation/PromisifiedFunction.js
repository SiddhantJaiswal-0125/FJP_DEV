function promisifiedFunc(){
    return new Promise(function(resolve, reject){
        let a = 1; 
        let b = 1;
        if(a == b){
        resolve("Equal");
        }
        else{
        reject("UnEqual");
    } 
    });
}

let ab = promisifiedFunc().then(function(va){
    console.log(va)

}).catch(function(e){
    console.log("Error  "+e);
});
console.log(ab);


