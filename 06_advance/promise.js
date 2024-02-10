//It takes callback with 2 parameter
//Promise created
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("First task");
    resolve();
    //Resolve is directly connected to .then()
  }, 100);
});

//Promise consumed
//Then also takes call back and value of resolve is passed onto then
promiseOne.then(function () {
  console.log("First Task completed");
});

//We can direclty create promise without holding into another variable

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Second task");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Second task completed");
});

//As I say data in resolve passed onto then so lets create it

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Third Task");
    //Data sent from resolve
    resolve({
      username: "Durgesh Dubey",
      email: "durgesh.d1805@gmail.com",
    });
  }, 2000);
});

//Since data is sent it pass onto .then() we can expect a parameter in function as a return from resolve so lets code
promiseThree.then(function (user) {
  if (user) {
    console.log(user);
    console.log("Third task completed");
  }
});

//Let's work on reject also
const promiseFour = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    resolve({
      username: "Durgesh05",
      password: "123",
    });
  } else {
    reject("ERROR! Username Not found");
  }
});

promiseFour
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  });

//Promise chaining : value from first then is pass onto another then and this goes on
//We can add finally also which means either resolved or reject it will happen
const promiseFive = new Promise((resolve, reject) => {
  let error = false;

  setTimeout(function () {
    console.log("Fourth Task");
    if (!error) {
      resolve({
        username: "Durgesh05",
        password: "123",
      });
    } else {
      reject("ERROR! Username Not found");
    }
  }, 4000);
});

promiseFive
  .then(function (user) {
    console.log(user);
    return user.password;
  })
  .then(function (password) {
    console.log(password);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("Promise five is either reject or resolved");
  });

//We can consume promise using Async and await also
//Declare promise
const promiseSix = new Promise((resolve, reject) => {
  let error = true;
  setTimeout(function () {
    if (!error) {
      resolve({
        language: "Javascript",
        mentorName: "Hitesh choudhary",
      });
    } else {
      reject("ERROR! Mentor Not found");
    }
  }, 5000);
});

//Write async fn and use await keyword to wait for response
async function consumePromiseSix() {
  try {
    const response = await promiseSix;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

//call async fn
consumePromiseSix();


//We can fetch data using async await and .the() .catch()
//fetch returns a promise
async function getData(){
    try
    {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        //converting into json also takes time so there should be await keyword also
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E: ",error);
    }
}

// getData();


//By .then() and .catch()
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(e){
    console.log("E: ",e);
});


