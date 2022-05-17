let image = document.querySelector("img");

image.onclick = () => {
  let source = image.getAttribute("src");

  if (source === "images/R.jpg") {
    image.setAttribute("src", "images/R2.jpg");
  } else {
    image.setAttribute("src", "images/R.jpg");
  }
};

let button = document.querySelector("button");
let heading = document.querySelector("h1");

button.onclick = () => {
  console.log("tst");
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    heading.textContent = "Welcome back, " + storedName;
    localStorage.clear();
  }
};

function setUserName() {
  let name = prompt("Enter your damn name");
  localStorage.setItem("name", name);
  heading.textContent = "Welcome to the system " + name;
}
