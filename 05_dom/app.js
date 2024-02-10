// let para = document.createElement("p");
// para.innerText = "Hey I'm Red";
// para.style.color = "red";
// let body = document.querySelector("body");
// body.append(para);

// let h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3";
// h3.style.color = "blue";
// body.append(h3);

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// div.style.borderColor = "black";
// div.style.backgroundColor = "pink";
// h1.innerText = "I'm in a div";
// p.innerText = "ME TOO! ";
// div.append(h1);
// div.append(p);
// body.append(div);

let body = document.querySelector("body");

let input = document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click Me";
btn.id = "btn";
body.append(input);
body.append(btn);

// let butn = document.querySelector("button");
// let butn = document.querySelector("#btn");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.classList.add("underLine");
body.prepend(h1);

let p = document.createElement("p");
p.innerHTML = `Apna College <strong>Delta</strong> Practice`;
body.append(p);
