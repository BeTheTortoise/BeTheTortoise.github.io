var myNavBar = document.querySelector('.nav-bar');

var projectTitles = document.querySelectorAll('.project-title');

// myNavBar.top = 0
myNavBar.style.top = '0';

// projectTitle.top = myNavBar.scrollHeight;
var height = (String(myNavBar.scrollHeight) + 'px');
projectTitlesLength = projectTitles.length
for (var i = 0; i < projectTitlesLength; i++) {
    projectTitles[i].style.top = height;
}