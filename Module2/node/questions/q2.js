let fs = require('fs');
let path = require('path');
// let v = path.join(__dirname, "Organize");
// fs.rmSync(v,{recursive:true});

let arr = ["Audio", "Video", "Software","Documents", "Applications", "Others",];
let nameArr = ["a","b","c","d","e"];
let extArr = [".mp3",".mp4",".exe", ".pdf", ".apk", ".rar"];

let organizePath = path.join(__dirname,"Organize");
if(!fs.existsSync(organizePath))
    fs.mkdirSync(organizePath);
 for(let i= 0; i<arr.length; i++)
 {
    let folderpath = path.join(organizePath, arr[i]);
    if(!fs.existsSync(folderpath))
        fs.mkdirSync(folderpath);
     for(let j = 0;j<nameArr.length;j++)
     {
         let filename = nameArr[j] + extArr[i];
         let filekaPath = path.join(folderpath, filename);
         fs.writeFileSync(filekaPath,"");

     }   
 }   