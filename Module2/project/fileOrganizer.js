// console.log("Hello World");

let fs = require("fs");
let path = require("path");
let folderPath = process.argv[2];
let folderExist = fs.existsSync(folderPath);
let extensions =  {
    Audio : [".mp3"],
    Video : [".mp4", ".mkv"],
    Document: [".doc", ".xlsx", ".pdf", ".txt"],
    Image : [".jpeg",".jpg", ".png",".gif" ],
    Software : [".exe",".apk"]
}



function moveFile(folderpath, pathOfFolder, fileName)
{
    let srcpath = path.join(folderPath, fileName);
    let destPath = path.join(pathOfFolder, fileName);

    fs.copyFileSync(srcpath, destPath);



    fs.unlinkSync(srcpath);
    return;



}

function getDocumentType(a)
{
    if(extensions.Audio[0] == a)
    return "Audio";
    else if(extensions.Video[0] == a || extensions.Video[1] == a)
    return "Video"; 
    else if(extensions.Document[0] == a || extensions.Document[1] == a||extensions.Document[2] == a || extensions.Document[3] == a)
    return "Document";
    else if(extensions.Image[0] == a || extensions.Image[1] == a||extensions.Image[2] == a || extensions.Image[3] == a)
    return "Document";
    else if(extensions.Software[0] == a )
    return "Software";

    return "Others";
}

if(folderExist)
{
    let files = fs.readdirSync(folderPath);
    // console.log(files);
    let organizePath = path.join(__dirname,"Organize");
    if(!fs.existsSync(organizePath))
    fs.mkdirSync(organizePath);

    for(let i = 0; i<files.length;i++)
    {
        let ext = path.extname(files[i]);
        // console.log(ext);
        let doctype = getDocumentType(ext);
        // console.log(doctype);
        let docTypeFolder = path.join(organizePath,doctype);

        if(fs.existsSync(docTypeFolder) == false)
         fs.mkdirSync(docTypeFolder);
        let filename = path.basename(files[i]);
         moveFile(folderPath, docTypeFolder, filename);

         //MOVE FILE TO DOWNLOAD FOLDER TO PARTICULAR FOLDER



    }


}
else{
    console.log("Please Enter a Valid Path");
}

// console.log(input);

