// HIGH Order Functions:- function those takes other functions as an argument

// Call Back Functions:- functions which are passed as an argument to a function.


// call back function
function getFirstName(fullName)
{
    //fullname = chirag sapra
    // fullname.spilt(" ") will spilt the fullname and will give substring in an array
    // i.e. fullname.spilt(" ") in case of chirag sapra will return ["Chirag", "Sapra"]

    fullName = fullName.split(" ");
    return fullName[0];
}

function getLastName(fullName)
{
    fullName = fullName.split(" ");
    return fullName[fullName.length - 1];
}

function printNames(fullName, fun)
{
    let name = fun(fullName);
    console.log(name);
}


printNames("Bharti Arora", getFirstName);
printNames("Chirag Sapra", getLastName);