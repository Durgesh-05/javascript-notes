// ForEach doesnt return any value 
// In this file we learn about map , filter , reduce 

// Filter - It also takes callback fn

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const anotherNums = nums.filter( (val) => val > 5)
// console.log(anotherNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let filteredBooks = books.filter( (obj) => obj.genre === 'Fiction')
// console.log(filteredBooks);

//Reduce - It is used to reduce array into single value
// It has two parameter accumalator and current value, in accumulator whatever is the intial value we give stored in it

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalBill = shoppingCart.reduce((accm, items) => accm + items.price, 0)
console.log(`The total price is ${totalBill} `);

//This is how we calculate the cart price which is given in array and object form we convert it into single value this is power of reduce



//Map - we can use it instead of forEach because it returns value
const newNums = nums.map((num) => num + 10)
// console.log(nums);
console.log(newNums);



