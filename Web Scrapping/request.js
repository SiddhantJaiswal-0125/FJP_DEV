const request = require('request');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/sunrisers-hyderabad-vs-rajasthan-royals-5th-match-1304051/live-cricket-score"
request(link, cb);

function cb (error, response, html) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', html); // Print the HTML for the Google homepage.
    
    const url = ".match-info.match-info-MATCH.match-info-MATCH-half-width .team .name";
    const dom = new JSDOM(html);
    const document = dom.window.document;
    // let teamsName = document.querySelector(".match-info.match-info-MATCH.match-info-MATCH-full-width .team .name");
    //DOUBT SUPPORT LO 
    console.log(document.querySelector(".match-info.match-info-HSB.card.scorecard .status-text span").textContent);
    let team  = document.querySelectorAll(url);
    console.log(team);

    // console.log(dom.window.document.querySelector(".match-info.match-info-HSB.card.scorecard .status-text span").textContent);
};