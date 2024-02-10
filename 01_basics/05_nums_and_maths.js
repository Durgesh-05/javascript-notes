let num1 = 100

//This is the number object so we get some properties
let num2 = new Number(200)
console.log(num1)
console.log(num2)

let num3 = new Number(522.57)
const hundreds = 1000000

console.log(num2.toString()) //convert to string
console.log(num3.toFixed()) //return non decimal round-off value
console.log(hundreds.toExponential()) //represents number in expo form
console.log(num3.toPrecision(3)) //it gives precision value it takes parameter
console.log(hundreds.toLocaleString("en-IN")) //converts string in form of ind currency system u can use another country system also if no parameter given it converts into us system


// ******************** MATHS *******************
// Math is object which has many methods
console.log(Math) 
console.log(Math.abs(-5))
console.log(Math.floor(4.7))
console.log(Math.ceil(4.2)) 
console.log(Math.round(4.7))

//Important
console.log(Math.random()) //This generates number between 0-1 
// if we want number in between some range so we can use one formula
//suppose I want number in between 1-6 creating a ludo game
let min = 1
let max = 6 
//this will generate number between 1-6 
//we use +1 to ignore 0 and use +min to generate a number greater or equal to min
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 
