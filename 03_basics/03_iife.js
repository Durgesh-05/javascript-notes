//Immediately Invoked function expression (IIFE)
// ()()
// 1st () => is for function defintion and 2nd () => is for function call

(function greet(){
    console.log(`Hello Durgesh`);
})();
//This is named IIFE, To end IIFE we explicitly add semicolon

(() => {
    console.log(`Hello Durgesh`);
})();
//This is unnamed IIFE

((num1 , num2) => {
    console.log(num1 + num2);
})(2,4)
//Parameterised IIFE

// if I don't put semicolon in 3rd IIFE and write 4th IIFE then I will get error