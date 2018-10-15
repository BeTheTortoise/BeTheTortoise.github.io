var myNavBar = document.querySelector('.nav-bar');

function setNavTop() {
    myNavBar.style.top = String((innerHeight - myNavBar.scrollHeight) + 'px')
}

setNavTop()
window.onresize = setNavTop

const theBody = document.querySelector('body');
logoButtonScript = document.createElement('script');
logoButtonScript.src = 'scripts/logobutton.js';
theBody.appendChild(logoButtonScript)