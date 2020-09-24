// TO pick soe portion of data from the whole file, we will use Cheerio module/library

// Example:--- html file se h1 ka data uthaege

let fs = require("fs");
let cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html", "utf-8");

// sara htmlKaData ek ch naam ke varibale me load karo..
// basically, ch is a like cheerio module, usme hum puri html feed kraege and fir usme se hum sara h1 ka data nikalwalege

let ch = cheerio.load(htmlKaData);
// it will load, html ka data into cheerio

// we will get h1's data from cheerio by using


// let h1KaData = ch("h1");
// console.log(h1KaData);

// this will give us the object of h1, which is of no use right now. so, we will ask cheerio to get us the text of h1 only

// let h1KaData = ch("h1").text();
// console.log(h1KaData);
// This will append all the data of h1 tag into an Array(h1KAdata), and will give us the output in different lines....

// let pKaData = ch("p").text();
// console.log(pKaData);
// console.log(pKaData.length);
// printed all the data of all the p tags, also calculated the length of the String

// to get the length of the Array
let pKaData = ch("p");
console.log(pKaData.length);
// it will give  us the length of the array || total number of p tags in html file