let Id = "1234abc"
let numberId = Number(Id)
// console.log(typeof numberId);
// console.log(numberId);

/*
if string is converted into number 
1234 => number 1234
1234abc => number NaN (type is number but if we log it then it is not a number)
*/

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn);

/*
if we convert number to boolean 
1 to infinite or -ve numbers  => true
0 => false
"" => false
"value" => true
*/

// *************** OPERATIONS *****************

/*
basic
(2+2) => addition
(2-2) => subtraction
(2*2) => multiplication
(2**2) => power
(2/2) => division
(2%2) => module (remainder)
= => assign
== => check condition
=== => check type
*/



// console.log(2 + 2 +"2")  => 42 because number then string 
// console.log("2" + 2 + 2) => 222 first string therefore all string

// console.log(+true); => 1
// console.log(true); => true

//same for false

// console.log(+""); => "" converted to boolean and + convert boolean into number 0

// console.log(2-"2"); => 0
// console.log("2" - 2); => 0

// console.log(2 - -"2"); => 4
// console.log(2 + -"2"); => 0
