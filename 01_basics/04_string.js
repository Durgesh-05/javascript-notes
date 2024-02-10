//Declaration
const fName = "Durgesh"
const surName = new String("Dubey")
console.log(`My name is ${fName} & my surname is ${surName}`)

// `` is string interpolation and modern style to write string when working on backend or anything else

//Methods

//1 - charAt
console.log(fName.charAt(3))

//2 - toUpperCase & toLowerCase
console.log(fName.toLowerCase())
console.log(fName.toUpperCase())

//3 - substring
console.log(fName.substring(0,4)) 
//In this method substring is from starting index to ending index - 1;

//4 - slice
console.log(fName.slice(-4,6))
//In slice we can give negative index also and for -ve index it works from reverse order
//But in substring -ve index is ignore and starts from 0

//5 - split
//If we want to create an array of string based on some keywords we can use split
const example = "Durgesh-Ganesh-Dubey"
const arrOfExample = example.split('-')
console.log(arrOfExample);

//6 - trim
//Remove all spaces
const fakeName = " Durgesh"
console.log(fakeName.trim());

//7 - replace
console.log(fakeName.replace(" ","$"));

//There are many other methods
