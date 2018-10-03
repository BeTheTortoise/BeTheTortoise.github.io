var myNavBar = document.querySelector('.nav-bar');

var projectTitles = document.querySelectorAll('.project-title');

// var projectLinks = document.querySelectorAll('.content a')

myNavBar.style.top = '0';

var height = (String(myNavBar.scrollHeight - 1) + 'px');
projectTitlesLength = projectTitles.length
for (var i = 0; i < projectTitlesLength; i++) {
    projectTitles[i].style.top = height;
}

// height = (String(myNavBar.scrollHeight + projectTitles[0].scrollHeight) + 'px');
// projectLinksLength = projectLinks.length
// for (var i = 0; i < projectLinksLength; i++) {
//     projectLinks[i].style.paddingTop = height;
//     projectLinks[i].style.marginTop = ('-' + height);
// }