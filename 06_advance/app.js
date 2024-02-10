let div = document.createElement("div");
let p = document.createElement("p");
const xhr = new XMLHttpRequest();
const requestUrl = "https://api.github.com/users/hiteshchoudhary";

xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    const image = data.avatar_url;
    p.textContent = `Hitesh Choudhary Followers: ${data.followers}`;
    div.style.backgroundImage = `url(${image})`;
    div.classList.add("card");
    document.querySelector("body").append(div);
    document.querySelector("body").append(p);
  }
};
xhr.send();
