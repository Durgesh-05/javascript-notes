//Singleton object
// Object.create() 

//Object literals

const user1 = {
    name: "Durgesh Dubey",
    email: "durgesh.d1805@gmail.com",
    id: 2220220080,
    location:"Mumbai"
}

//Objects are key-value pairs key are also a string behind the scene

//How to access?

console.log(user1.name); //By using .
console.log(user1["name"]); //I've mentioned before that key are strings so we have to use it like this , this is usefull when someone written key in string since we cannot access anything in string after . for example

const user2 = {
    name: "Gangesh",
    "Full Name" : "Gangesh Ganesh Dubey"
}

// console.log(user2."Full Name") This is wrong so accessing using 2nd types help us here

//How to create a symbol and use it as a key?? --> Imp

const sym = Symbol("D")

const user3 = {
    // sym : "DU" --> This is wrong here we use sym as key but when we check type of this sym this will show us string

    name: "Durgesh Dubey",
    email: "durgesh.d1805@gmail.com",
    id: 2220220080,
    location:"Mumbai",
    [sym] : "DU"
}

// console.log(user3);


//We can freeze object also so no change can further updated
// Object.freeze(user3)
user3.location = "badlapur"

console.log(user3); //No change 

//We can add functions also in objects

user3.greeting = function(){
    console.log("Hello User ");
}

console.log(user3.greeting());
console.log(user3);