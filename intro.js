// execution:- top to bottom,,, left to Right
// NO:- main functions, classes, private, public


// printing:- console.log("");
// run with the help of 1. open with terminal... 2. then type "node intro.js"
console.log("Hello world");

//----------------------------------------------------------------------------------

// Datatypes used in java:- int, float, double, char, boolean
// Javascripts uses ES6 syntax at present, earlier it used ES5 syntax, these are just new updates in javascripts.

// To declare a datatype in JS, we use "let" or "const"

let a = 10;
let b = 20.6;
let c = "hello, i am Chirag";
let d = "true";
let e = [1,2,3,4,5];
let f = [1,"sayHello", 3.256, "40",5, [1,2,3,4,5], 10];

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(f[5])


// No 2-D Arrays in javascript
// Everything is object in javaScript
// Dynamically typed language, so we donot need to tell datatype.

// ---------------------------------------------------------------------------------

// FOR LOOP
for(let i = 0; i < f.length; i++)
{
    // console.log(f[i]);
}

// ---------------------------------------------------------------------------------
// main datatypes used in jS are:- number, null, undefined, boolean, String
// String is represented in double as well as single codes.
// No such thing as char

let g = 'Hello, i am Chirag';
// console.log(g);

// Undefined
let hi;
// console.log(hi);

let h = undefined;
// console.log(h);

let i = null;
// console.log(i);

// ------------------------------------------------------------------------------------

// Scope
// let ==> It works on block Scope
if(true){
    let sayHi = true;
}
// console.log(sayHi);

// const ==> It also works on block Scope, used to prevent the reinitialization of any object
const pi = 3.14;
// console.log(pi);
// pi = 10;
