/*
number => 2 power 53
string => " " value inside double quote
bigint => use to store value out of range of number
boolean => true/false
undefined => if we have not defined its value
null => it means a empty value

object => key value pair
*/

let name = "Durgesh"
let Id = 2220220080
let anyNumber = BigInt("12345689275451")
let isLoggedIn = true
let setState;
let phi = null;

console.table([typeof Id, typeof anyNumber, typeof isLoggedIn, typeof setState, typeof phi])

//symbol datatype is created by using "Symbol()"

//type of undefined is undefined
//type of null is object

//Reference or Non Primitive
//We will learn this type in more advance way in future chapters
//Arrays
let arr = ["Durgesh", "Rahul" , "Gangesh", "Arya"];

//Object
let myObj = {
    name: "Durgesh",
    age: 18,
    college: "KJSIT"
}


//Functions
const myfunction = function(){};