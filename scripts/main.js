const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/seneca.jpeg") {
    myImage.setAttribute("src", "images/marcusaurelius.jpg");
  } else {
    myImage.setAttribute("src", "images/seneca.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Isn't Seneca Cool? ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Isn't Seneca Cool? ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };