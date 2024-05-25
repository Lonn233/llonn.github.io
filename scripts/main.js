const myimg = document.querySelector("img");
myimg.onclick = () => {
    const src = myimg.getAttribute("src");
    if (src === "images/dog.jpg") {
        myimg.setAttribute("src", "images/Firefox-icon.png");
    }
    else {
        myimg.setAttribute("src", "images/dog.jpg");
        myimg.setAttribute("width", "300px");
        myimg.setAttribute("height", "300px");
    }
};
let mybutton = document.querySelector("button");
let myheading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("please enter your name");
    localStorage.setItem("name", myName);
    myheading.textContent = `Mozilla is cool,${myName} ` ;
}
if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    const storedName = localStorage.getItem("name");
    myheading.textContent = `Mozilla is cool,${storedName}`;
}
mybutton.onclick = () => {
    setUserName();
}
