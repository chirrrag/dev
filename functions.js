// function body
// function sayHi()
// {
//     console.log("Hello");
// }
// function call
// sayHi();

// -------------------------------------------------
// TYPE-2
// function sayHi(name)
// {
//     console.log(name + " says Hi!");
// }
// sayHi("Chirag");

//--------------------------------------------------
//----------------IMPORTANT-------------------------
//--------------------------------------------------
// TYPE-3
// Using escape sequence ` one ke sath wala
// using String interpolation

// function sayHi(name)
// {
//     // String interpolation
//     console.log( `${name} says Hi !`);
// }
// sayHi("Chirag");


//---------------------------------------------------
// Funcions also acts as variable in javascript


// let fun = function sayHi(name)
// {
//     console.log(   `${name} says Hello !`);
// }

// fun("Chirag");


//----------------------------------------------------

// let fun = function sayHi(name)
// {
//     console.log(   `${name} says Hello !`);
// }
// let result = fun("Chirag sapra");
// console.log(result);

// This gived the output undefined because it is same as let result;

//----------------------------------------------------------------------

// Function always have return type



// let fun = function sayHi(name)
// {
//     console.log(       `${name} says Dheeme laaallloooou !`);
//     return 10;
// }

// let result = fun("Rashbari");
// console.log(10);




//------------------------------------------------------------------------

// predict the output

// Number 1



// let a = 10; 
// if(true)
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a);


// Number 2

// let a = 10;
// if(true)
// {
//     console.log(a);
// }
// console.log(a);


// Number 3

// if(true)
// {
//     let a = 20;
//     console.log(a);
// }
// console.log(a); // it will throw an error that a is not defined