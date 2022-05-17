const puppeteer = require('puppeteer');

let browserPromise = puppeteer.launch({headless: false } );

browserPromise.then(function(browserInstance){
    let pagePromise  = browserInstance.newPage();
    return pagePromise;
}).then( function(page){
    console.log("page is opened");
    let urlPromise = page.goto("https://www.google.co.in/");
return urlPromise;
}).then(function(){
    console.log("Page is Opened");
});