var myNavBar = document.querySelector('.nav-bar');

var projectTitle = document.querySelector('.project-title');

// myNavBar.top = 0
myNavBar.style.top = '0';

// projectTitle.top = myNavBar.scrollHeight;
var height = (String(myNavBar.scrollHeight) + 'px');
projectTitle.style.top = height;