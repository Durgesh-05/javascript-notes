// Qs1. Write a JavaScript function that returns array elements larger than a number.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let numGreater = (arr) => {
  let temp = [];
  arr.forEach((element) => {
    if (element >= 5) temp.push(element);
  });
  return temp;
};

// console.log(numGreater(arr))

// Qs2. Write a JavaScript function to extract unique characters from a string.

let str = "abcdabcdefgggh";

let filteredString = str
  .split("")
  .filter((char, index, array) => {
    //this will check the uniqueness
    return array.indexOf(char) === index;
  })
  .join("");

// console.log(filteredString);


// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
let country = ["Australia", "Germany", "United States of America"];

let maxLength = Math.max(...country.map((val) => val.length));

let filteredCountry = country
  .filter((cName) => cName.length === maxLength)
  .toString();

// console.log(filteredCountry);


// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let noOfVowels = (str) => {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
            count = count + 1
        }
    }
    return count
}

// console.log(noOfVowels("Durgesh"));


// Qs5. Write a JavaScript function to generate a random number within a range (start, end).

let generateRandomNumbers = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

// console.log(generateRandomNumbers(1,100));

