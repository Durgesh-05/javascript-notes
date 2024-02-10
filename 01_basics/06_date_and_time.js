//Date is object so we create an instance of it
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

//We can customize date also using toLocaleString it takes parameter as intnl std & object

let newDate1 = new Date(2023,11,19) //It takes parameter as year-month-date 
// Month follows 0-based indexing
let newDate2 = new Date("12-11-2023") // MM-DD-YYYY
// console.log(newDate2.toDateString());

// *************** TIME ***********
let date1 = new Date()
//This will give time in milliseconds from January 1, 1970
// console.log(date1.getTime()); 

let currDate = new Date("12-19-2023")
// console.log(currDate.getTime())

//We can get day from date month year also using methods

//SetTimeout fn
// This fn execute code for once after given interval
setTimeout(() => {
    // console.log("Hello World! ");
}, 1000)


// Set Interval execute the code repeatedly after the interval given so we have to close it 
const id = setInterval(() => {
    console.log("Hello World!");
}, 2000)

clearInterval(id) 
// We have to get id for setInterval and to stop it we have to pass this id into clear Interval