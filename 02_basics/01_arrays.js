//Declaration

const numbers = [1 ,2 ,3, 4, 5]
//We can add any value of any datatype in arrays(JS)
//It is not fixed like any other language we can add other elements after also

const myHeroes = new Array("Ironman", "Captain" , "Spiderman", "Thor")

console.log(numbers)
console.log(myHeroes)


//Array Methods

//Push element at last pos
// numbers.push(6)


//Remove element from last
// numbers.pop()


//Remove element from start
// numbers.shift()


//Add element at start
// numbers.unshift(0)



// console.log(numbers.includes(2)); //Return true - false value
// console.log(numbers.indexOf(3)); //Return index if not then -1

// const myNewArr = numbers.join() //This will copy all the values of numbers array into myNewArr and return it in string format

// console.log(myNewArr);
// console.log(typeof myNewArr)

// ******** Important *********
//Splice and slice 

let arr = [1,2,3,4,5]
//This will copy data from original array from given range by not including last value and returns array  it will not affect original array
let newArr1 = arr.slice(1,4)
console.log(newArr1);
console.log("A", arr)


//In this it will remove data from original array from range by including last value also and changes original array
//In this case value from index 1-4 is removed and move to new array and thereby original array consist only one value
let newArr2 = arr.splice(1,4)
console.log(newArr2);
console.log("B", arr);
