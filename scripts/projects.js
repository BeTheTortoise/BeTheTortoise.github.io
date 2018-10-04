var myNavBar = document.querySelector('.nav-bar');

var projectTitles = document.querySelectorAll('.project-title');

// var projectLinks = document.querySelectorAll('.content a')

myNavBar.style.top = '0';

var height = (String(myNavBar.scrollHeight - 1) + 'px');
var max_title_height = projectTitles[0].scrollHeight;
projectTitlesLength = projectTitles.length;
for (var i = 0; i < projectTitlesLength; i++) {
    projectTitles[i].style.top = height;
    if (projectTitles[i].style.height > max_title_height) {
        max_title_height = projectTitles[i].scrollHeight;
    }
}
for (var i = 0; i < projectTitlesLength; i++) {
    projectTitles[i].style.height = String(max_title_height + 'px');
}


// height = (String(myNavBar.scrollHeight + projectTitles[0].scrollHeight) + 'px');
// projectLinksLength = projectLinks.length
// for (var i = 0; i < projectLinksLength; i++) {
//     projectLinks[i].style.paddingTop = height;
//     projectLinks[i].style.marginTop = ('-' + height);
// }