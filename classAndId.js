// Class and Id's are attributes of various tags in html


// CSS:- use CLASS
// JavaScript:- use I'D

// READING HTML files with the help of Class
let fs = require("fs");
let cheerio = require("cheerio");

let htmlKaData = fs.readFileSync("./index.html", "utf-8");

let ch = cheerio.load(htmlKaData);
// ---------------------------------------------------------------------
// getting things on the basis of class
// let pKaData = ch(".pa").text();
// console.log(pKaData);

// class is accessed by the . operator
// ---------------------------------------------------------------------


// Can 2 elements have same class??????
// yes

// let pKaData = ch(".pa").text();
// console.log(pKaData);

// it just appended them as the String

// ----------------------------------------------------------------------
//////////////////////////////////////////////////////
// Can 1 element has multiple class name???
// yes, just add diferent class name by using space bar 
// class = "pa occupy"... pa & occupy are 2 different class

// let pKaData = ch(".pa.outer-p").text();
// console.log(pKaData);

//-------------------------------------------------------------------
// IN CASE OF NESTED TAG, just use the tags name
//-----------------------------------------------------------------

// let pKaData = ch("ul li p").text();
// console.log(pKaData);



// ------------------------------------------------------------------
// ------------------------------------------------------------------
//  ON THE BASIS OF I'D
// -----------------------------------------------------------
// ------------------------------------------------------------

// WE will use # sign to access id

// let h1KaData = ch("#unique").text();
// console.log(h1KaData);

//--------------------------------------------------------------------

// 1 hi element par same classs and id lag sakti hain

// let h1KaData = ch(".unique").text();
// console.log(h1KaData);

// --------------------------------------------------------------------