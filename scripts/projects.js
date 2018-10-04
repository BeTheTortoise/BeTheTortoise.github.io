var myNavBar = document.querySelector('.nav-bar');

var projectLinks = document.querySelectorAll('.nav-bar a');

for (i = 0; i < projectLinks.length; i++) {
    projectLinks[i].onclick = function() {
        window.scrollBy(0, myNavBar.scrollHeight);
    }
}