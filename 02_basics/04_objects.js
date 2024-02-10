const tinderUser = new Object();
tinderUser.id = "123"
tinderUser.name = "Durgesh"
tinderUser.email = "durgesh@google.com"
tinderUser.password = "@123#"

console.log(tinderUser);

//Objects inside of objects

const userDetails = {
    name:"Durgesh",
    phNo: 7498887060,
    email:"durgesh.d1805@gmail.com",
    address : {
        flat_No : "B-302",
        buildingName: "Parvati Angan",
        area: "Barrage Road",
        pincode: 421503
    }
}

console.log(userDetails.address.flat_No);

//How to combine objects like array?

//1 - using Operator.assign method

const t1 = {1:'a',2:'b'}
const t2 = {3:'a',4:'b'}
//Object.assign(target,source) -> here {} act as a target and t1 and t2 act as source
// const t3 = Object.assign(t1,t2) In this case data will me combined in t1 so we use empty objects 
// const t3 = Object.assign({},t1,t2)
// console.log(t3);

// 2 - spread operator
const t3 = {...t1, ...t2}
console.log(t3);

//We can get all key and all values separately also
console.log(Object.keys(userDetails)); //This method returns a array of keys
console.log(Object.values(userDetails)); //This method returns array of values


//Object de-structuring
// Instead of using userDetails.name everytime when needed we can destructure it 
const {name} = userDetails
console.log(name);

const {address: add} = userDetails
console.log(add);

//using its key directly and suppose key is too long so we can de structure in it key: some name so we can easily call it