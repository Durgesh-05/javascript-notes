// let div = document.querySelector("div");
// let btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//     let red = generateRandomColor();
//     let green = generateRandomColor();
//     let blue = generateRandomColor();
//     div.style.backgroundColor = `rgb(${red},${green},${blue})`;

// })

// function generateRandomColor(){
//     let min = 0;
//     let max = 255;
//     return Math.floor(Math.random() *(max - min + 1) + min)
// }

// let box = document.querySelector(".box1");

// box.addEventListener("mouseout", ()=>{
//     console.log("Mouse is out");
// })

// document.addEventListener("scroll", ()=>{
//     console.log("Screen is scrolling");
// });

// let input = document.querySelector("input");
// let h2 = document.querySelector("h2");

// input.addEventListener("input", ()=>{
//     const userInput = input.value;
//     const filteredInput = userInput.replace(/[^a-zA-Z\s]/g,"");
//     h2.innerText = filteredInput;
// })

let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let items = document.createElement("li");
  let removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove task";
  items.innerText = input.value;
  ul.appendChild(items);
  items.append(removeBtn);

  removeBtn.addEventListener("click", () => {
    items.remove();
  });
});
