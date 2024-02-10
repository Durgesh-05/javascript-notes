//This is a way to declare any const variable
const accountId = 2220220080

//If we log this we will get error because a const value cannot be changed 
// accountId = 1234 

let accoutName = "Durgesh dubey"
var accountPassword = "1234"

//We can declare variable like this also but it is not considered as a good practice 
// accountCity = "Thane"

let accountState;
/*
Prefer not to use var becuase var has issue in block scope and functional scope
*/

console.log(accountId);

console.table([accoutName,accountPassword, accountState])

