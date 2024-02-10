const marvel_heroes = ["Ironman", "Thor", "Hulk"]
const dc_heroes = ["Superman", "Batman", "Flash"]

// marvel_heroes.push(dc_heroes) //It will create array into another array
console.log(marvel_heroes); 
//Output :- [ 'Ironman', 'Thor', 'Hulk', [ 'Superman', 'Batman', 'Flash' ] ]
//3 index element will be an array

const all_heroes = marvel_heroes.concat(dc_heroes) //Concat method returns new array by concating 2 or more arrays
console.log(all_heroes);

//We can do it another way also using spread operator
// Spread syntax "expands" an array into its elements
//spread operator :- "..."

let all_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_heros);

//We can create array from 2-3 data also,check array

// Array.of() is used to create an array with the specified elements, regardless of their data types.
// Array.from() is used to create an array from an iterable or array-like object

console.log(Array.isArray("Durgesh")); 
console.log(Array.from("Durgesh")); //This will create array from this string

console.log(Array.from({name:"Durgesh"})); //Interesting , this will return an empty array becuase to create array from objects we have to mention key or value array

let s1 = 10
let s2 = 20
let s3 = 30

console.log(Array.of(s1,s2,s3)); //It will return new array by taking set of elements

