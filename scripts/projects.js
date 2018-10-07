var myNavBar = document.querySelector('.nav-bar');

function setNavTop() {
    myNavBar.style.top = String((innerHeight - myNavBar.scrollHeight) + 'px')
}

setNavTop()
window.onresize = setNavTop

// var projectLinks = document.querySelectorAll('.nav-bar a');

// for (i = 0; i < projectLinks.length; i++) {
//     projectLinks[i].onclick = function() {
//         window.scrollBy(0, myNavBar.scrollHeight);
//     }
// }