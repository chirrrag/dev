const { html } = require("cheerio");
// FS ==> file system ==> is used to communicate with file system
// module is "required"

// to call the module
let fs = require("fs");

// TO read file F1
// let f1KaData = fs.readFileSync("./f1.txt");
// console.log("f1 ka data = " + f1KaData);


// --------------------------------------------------------------------------
//  ---------------------------NEW---------------------------------------
// --------------------------------------------------------------------------


// let htmlKaData = fs.readFileSync("./index.html");
// console.log(htmlKaData);


// this will display the data in buffer mode
// to display the whole html text, write utf-8 in readFileSync
// it will display whole html document

let htmlKaData = fs.readFileSync("./index.html", "utf-8");
console.log(htmlKaData);
