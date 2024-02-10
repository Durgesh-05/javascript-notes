function sayMyName(){
    console.log("Durgesh")
}

// sayMyName()

// function sum(number1, number2){
//     console.log(number1 + number2)
// }

// const result = sum(3,4)
//If we log result then output will be undefined because nothing is return (console.log is to print not to return)

function sum(num1, num2){
    // let result = num1 + num2
    // return result
    // we can directly return also
    return num1 + num2
}

const result = sum(5,8)
// console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Durgesh"));
// if no argument is given then it will we undefined , we can give some default value also incase user doesn't enter the name

// function loginUserMessage(username = "Durgesh"){
// return `${username} just logged in`
// }
// like this if user doesn't enter the name default name will be return


//Suppose we are creating a cart where we have to calculate the total price we don't know how many parameters are given so we use "Rest" operator "..." it looks like spread operator also but it is different

function calculateCartPrice(...items){
    return items
    // this will return a array consist of all items in future we will learn how to loop through array so we will understand how to calcuate total price
}

console.log(calculateCartPrice(100,2000,400))

// if parameter is given like this (val1, val2, ...items) and arguments is like this (100,200, 400,5000) then it will return 400 and 5000 in array becuase 1st 2 arguments are considered as val1 and val2 and others are treated as rest

//passing object in fn
const user = {
    username: "Durgesh",
    id: 1234
}

function printUserDetails(anyObject){
    //We can directly pass object also
    return `Username : ${anyObject.username} and Id : ${anyObject.id}`
}

console.log(printUserDetails(user));

//If by some chance key has different name like "usernames" instead of username then in fn printUserDetails in return statement undefined is printed instead of actual username 

const arr = [1, 2, 3, 4]

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(arr));