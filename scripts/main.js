var myImage = document.querySelector('#profile');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/me.jpg') {
      myImage.setAttribute ('src','images/logo-preview.jpg');
    } else {
      myImage.setAttribute ('src','images/me.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

// var myBody = document.querySelector('body');

// myBody.onclick = function() {
//  let newColor1 = Math.ceil(Math.random()*255);
//  let newColor2 = Math.ceil(Math.random()*255);
//  let newColor3 = Math.ceil(Math.random()*255);
//  myBody.style.backgroundColor = `rgb(${newColor1}, ${newColor2}, ${newColor3})`;
// }