
let n = 17;
let prime = false;
for(let i = 2;i<15;i++)
    if(n%i==0)
    {
        prime = true;
        break;
    }
console.log(n);
console.log(prime ? "NO, Not a Prime ": " Number is Prime ")    
