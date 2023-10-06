let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
//alert("hello!");
function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}
let myImage = document.querySelector("img");
myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/Flower.png"){
        myImage.setAttribute("src", "images/Flo.jpg");
    }
    else{
        myImage.setAttribute("src","images/Flower.png");
    }
};
let myButton = document.querySelector("button");
function setUserName(){
    let myName = prompt("请输入你的名字。");
    if(!myName){
        setUserName();
    }
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla Cool, " + myName;
    }
}
if(!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla Cool, " + storedName;
}
myButton.onclick = function () {
    setUserName();
};