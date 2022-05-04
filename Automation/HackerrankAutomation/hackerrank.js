 //USER ID : kevebe6754@viemery.com
//  Password : 12345678
 const puppeteer = require('puppeteer');
 let browserPromise = puppeteer.launch({headless: false, args:['--start-fullscreen'], defaultViewport: null});
   let page ;
 browserPromise.then(function(browser){
    console.log("BROWSER IS OPENED"); 
    browser.newPage().then(function(paging){
       paging.goto('https://github.com/SiddhantJaiswal-0125');

    });

    let pagePromise = browser.newPage();
    return pagePromise;
 }).then(function(webPage){
    console.log("Page is Opened");
    page = webPage; 
   let urlPromise = webPage.goto("https://www.hackerrank.com/");
   return urlPromise;
 }).then(function() {
   return waitandClick('ul.menu a',page);
}
 
 )
 
 .then(function(){


return waitandClick('.fl-button-wrap.fl-button-width-auto.fl-button-left a', page);})
 
 .then(function(){
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
return waitandClick('[data-automation="algorithms"]',page);
})

 .then(function(){
   let waitForSelector = page.waitForSelector('.filter-group');
   return waitForSelector;
    }).then(function(){
      let domSelectPromise = page.evaluate(function(){
       let selectAllDivs = document.querySelectorAll('.filter-group');
         let div = selectAllDivs[3];
         let clickSelector = div.querySelector(".ui-checklist-list-item input" );
      clickSelector.click();
      return; 
  

      });
      return domSelectPromise;
    }).then(function(){
       console.log("WARMUP Selctor");

       return page.waitForSelector('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled ');

       //LIST OF QUESTIONS
    }).then(function(){

      //   return page.click('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');
    });

    function waitandClick(selector,page)
    {
       console.log("Selector  "+selector);
       return new Promise( function(resolve, reject){
          let waitPromise = page.waitForSelector(selector);
          waitPromise.then(function(){
             let click =  page.click(selector);
             return click;
          }).then(
            function(){
               resolve();
            }
          );

       });

    }
