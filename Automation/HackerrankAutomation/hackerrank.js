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
    //FOR CLICKING LOGIN TAB ON (LOGIN - SIGNUP body)
    let waitPromise =  page.waitForSelector('ul.menu a'); 
    return waitPromise;
 }).then(function(){
    console.log("Button is Clicked");
   let loggedIn =  page.click('ul.menu a');
   return loggedIn;
 }).then(function(){

   //FOR GETTING LOGIN AS DEVELOPER TAG
     let waitPromise = page.waitForSelector('.fl-button-wrap.fl-button-width-auto.fl-button-left a');
     return waitPromise;
 }).then(function(){
   let clickPromise =  page.click('.fl-button-wrap.fl-button-width-auto.fl-button-left a');
   // input 1 = #input-1
   // Input 2 = #input-2
   return clickPromise;
 }).then(function(){
let waitpromise = page.waitForSelector('#input-1');
return waitpromise;
 }).then(function(){
  let pageTypepromise =  page.type('#input-1','kevebe6754@viemery.com', {delay:100});
 
return pageTypepromise;
 }).then(function(){
   let passwordtypepromise =  page.type('#input-2', '123456789',{delay:100});
   return passwordtypepromise;
 }).then(function(){
   let clickPromise = page.click('button[data-analytics="LoginPassword"]');
return clickPromise;
 }).then(function(){
    console.log("LOGIN SUCCESSFULL");
   let waitPromise = page.waitForSelector('[data-automation="algorithms"]');
   return waitPromise;
 }).then(function(){
   let pageOpenPromise = page.click('[data-automation="algorithms"]');
   return pageOpenPromise;
 }).then(function(){
   let waitForSelector = page.waitForSelector('.filter-group');
   return waitForSelector;
    }).then(function(){
 
      console.log("HERE 1");
      let domSelectPromise = page.evaluate(function(){
         // console.log("HERE 2");
         let selectAllDivs = document.querySelectorAll('.filter-group');
         let div = selectAllDivs[3];
         let clickSelector = div.querySelector(".ui-checklist-list-item input" );
         console.log("ADDING FILTER")
         clickSelector.click();
         return;   

      });
      return domSelectPromise;
    }).then(function(){
       console.log("WARMUP Selctor");
    });

