const user = {
    username : "Durgesh",
    id : 1234,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

//This refer to context in block scope it refers to block context
//IMP - In global scope in node this refers to empty object but in browser it refers to "window" object 

// user.welcomeMessage()
// console.log(this)

//This in function
function printName(){
    let username = "Durgesh"
    // console.log(this) output of it -> 
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     structuredClone: [Getter/Setter],
    //     atob: [Getter/Setter],
    //     btoa: [Getter/Setter],
    //     performance: [Getter/Setter],
    //     fetch: [Function: fetch],
    //     crypto: [Getter]
    //   }

    //But if we log this.username then it is undefined therefore this is not used in function
    console.log(this.username);
}

// printName()


//Arrow Function
const printAnotherName = () =>{
    // console.log(this);
    //In arrow function "this" gives empty object
    //But also in arrow function this doesn't support
    let username = "Durgesh"
    console.log(this.username);
}

printAnotherName()

//Implicit return in arrow function
const addTwo = (num1, num2) => (num1 + num2) //No need to write return keyword