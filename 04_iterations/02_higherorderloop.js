// for of loop
let arr = [1,2,3,4]
for (const value of arr) {
    // console.log(value)
}

//Map is same as objects but entries are entered as we write that means in same sequence and maps are iterable objects are not iterable through for of loop

let maps = new Map()
maps.set(1,"Durgesh")
maps.set(2,"Rahul")
maps.set(3,"Arya")
maps.set(4,"Khush")

// console.log(maps);
for (const [key,val] of maps) {
    //This will give array so we will destructure the array
    // console.log(val);
    // console.log(`Key :- ${key} & Value :- ${val}`);
}

//Maps are iterable through for of but obj are not it is seen in line no 28
const myObj = {
    1: "Durgesh",
    2: "Rahul"
}

// for (const [key,val] of myObj) {
    //This will give array so we will destructure the array
    // console.log(val);
    // console.log(`Key :- ${key} & Value :- ${val}`);
// }

//So to iterate over obj we can use for in loop and for in loop can use for other things also not only for objects

for (const key in myObj) {
    // console.log(myObj[key]);
}

for(const val in arr){
    // console.log(arr[val]); 
    // If we direct log val it will print index
}

//We cannot apply for in loop for map

// For each loop

arr.forEach( (val) => {
    // console.log(val);
})

//We can pass function in foreach also

const printName = (items) => {
    console.log(items);
}
// arr.forEach(printName)

//ForEach has 3 parameter :- current value, index and array access
arr.forEach((val, index , arr) => {
    // console.log(`val :- ${val} index :- ${index} array :- ${arr}`);
})

// Generally data from database comes in form of array and in array there are multiple objects where data is stored so we can apply foreach to easily access objects

const myArr = [
    {
        fName : "Durgesh",
        lName : "Dubey"
    },
    {
        fName : "Rahul",
        lName : "Dhanak"
    },
    {
        fName : "Arya",
        lName : "Gami"
    },
]

myArr.forEach( (items) => {
    //Here items means each objects and we can take values of objects by .
    // console.log(items.fName);
})



