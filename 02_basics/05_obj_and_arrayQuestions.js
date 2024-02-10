// Qs2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

const car = {
  name: "Tata Tigor",
  model: "Top T1",
  color: "White",
};

// console.log(car.name);

// Qs3. Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

const Person = {
  name: "Durgesh Dubey",
  age: 19,
  city: "Mumbai",
};

Person.city = "New York";

Person.country = "United States";

// console.log(Person);
// console.log(Person.city);

// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.
let arr = [1, 2, 3, 4, 5];

let res = (array) => {
  return array
    .map((element) => element * element)
    .reduce((accm, val) => accm + val, 0);
};

const avg = res(arr) / arr.length;
// console.log(avg);
// console.log(res(arr));

// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

let newArray = (array) => {
  return array.map((val) => val + 5);
};

// console.log(newArray(arr));

// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array

let strArray = ["durgesh", "rahul", "arya", "khush", "siddesh"]

let strArrayToUpperCase = (array) => {
    return array.map((str) => str.toUpperCase())
}

// console.log(strArrayToUpperCase(strArray));

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled

let nums = [1,2,3,4]

let doubleAndReturnArgs = (array,...val) => {
    let modifiedVal = val.map((nums) => nums * 2)
    return [...array,...modifiedVal]
}

// console.log(doubleAndReturnArgs(nums,5,6,7));