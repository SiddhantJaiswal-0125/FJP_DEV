const puppeteer = require('puppeteer');

let browserPromise = puppeteer.launch({headless: false } );
browserPromise.then(function(browserInstance){
    let pagePromise  = browser.newPage();
    return pagePromise;

})