 //USER ID : kevebe6754@viemery.com
//  Password : 12345678
 const puppeteer = require('puppeteer');
 let browserPromise = puppeteer.launch({headless: false});
  let page ;
 browserPromise.then(function(browser){

    console.log("BROWSER IS OPENED"); 
    let pagePromise = browser.newPage();
    return pagePromise;
 }).then(function(webPage){
    console.log("Page is Opened");
    page = webPage; 
   let urlPromise = webPage.goto("https://www.hackerrank.com/");
   


 }).then(function() {
    console.log("HackerRank Page is Opened");
    let waitPromise =  page.waitForSelector('ul.menu a'); 
    return waitPromise;
 }).then(function(){
    console.log("Button is Clicked");
   let loggedIn =  page.click('ul.menu a');
   return loggedIn;
 })

 
 
 ;

