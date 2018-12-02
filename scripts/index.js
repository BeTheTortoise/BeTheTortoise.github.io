/* <nav class="nav-bar">
<a class="button" href="#project1">Fantasy Football Scheduler</a>
<a class="button" href="#project2">Task Magic</a>
<a class="button" href="#project3">This Website</a>
<a class="button" href="#project4">Space Explorer</a>
<a class="button" href="pictures.html">Pictures</a>
<a class="button" href="fortune.html">Fortune Cookie</a>
<a class="button" href="blog.html">Blogs</a>
</nav> */
const theBody = document.querySelector('body');
const theURL = window.URL
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')

linkURLs = [
    ['Fantasy Football Scheduler', 'http://ffscheduler.collinargo.com'], 
    ['Task Magic', 'http://taskmagic.collinargo.com'], 
    ['This Website', 'http://collinargo.com'], 
    // ['Space Explorer', 'index.html#project4'], 
    ['Pictures', 'pictures.html'], 
    // ['Fortune Cookie', 'fortune.html'], 
    // ['Blogs', 'blog.html'],
    // ['API Practice', 'api_practice.html'],
    // ['Test', 'test.html'],
    ['My Space App', 'http://myspaceapp.collinargo.com'],
    ['FitFoodTracker', 'http://fitfoodtracker.collinargo.com']
];
function createNavBar() {
    const tempNavBar = document.createElement('nav');
    tempNavBar.classList.add('nav-bar');
    // tempNavBar.classList.add('disappearing');
    createNavLinks(tempNavBar);
    createNavLinks(tempNavBar);
    createNavLinks(tempNavBar);
    return tempNavBar;
}
function createNavLinks(navBar) {
    linkURLs.forEach(project => {
        const link = document.createElement('a');
        link.classList.add('button');
        link.textContent = project[0];
        link.href = project[1];
        navBar.appendChild(link);
    });
}
const myNavBar = createNavBar();
theBody.appendChild(myNavBar);

leftArrow.onclick = scrollNavBarClick
rightArrow.onclick = scrollNavBarClick

function scrollNavBarClick(e) {
    if (e.target.id == 'left-arrow') {
        myNavBar.scrollTo((myNavBar.scrollLeft + 100), 0)
    } else {
        myNavBar.scrollTo((myNavBar.scrollLeft - 100), 0)
    }
}

function setNavTop() {
    myNavBar.style.top = String((innerHeight - myNavBar.scrollHeight - 5) + 'px');
}

function scrollNavBar() {
    const navLength = myNavBar.scrollWidth;
    // console.log(navLength);
    if (myNavBar.scrollLeft > navLength * 2 / 3) {
        myNavBar.scrollLeft = navLength / 3;
    } else if (myNavBar.scrollLeft < navLength / 3) {
        myNavBar.scrollLeft = navLength * 2 / 3;
    }
    // console.log(myNavBar.scrollLeft);
    // if reach end of nav bar, append new nav bar to end
    // if at beginning of nav bar, prepend new nav bar
}

setNavTop();
window.onresize = setNavTop;
myNavBar.onscroll = scrollNavBar;

// <a class="logo button" href="index.html"><img src="CollectColl/Standard Logo Files/Monochrome on Transparent.png"></a>
function createLogoButton() {
    const theA = document.createElement('a');
    theA.href = 'index.html';
    theA.classList.add('logo');
    theA.classList.add('button');
    // theA.classList.add('disappearing');
    const theLogo = document.createElement('img');
    theLogo.src = 'CollectColl/Standard Logo Files/Original.png';
    theA.appendChild(theLogo);

    return theA;
}

theBody.appendChild(createLogoButton());

const fontLink = document.createElement('link');
fontLink.href = "https://fonts.googleapis.com/css?family=Space+Mono";
fontLink.rel = "stylesheet";
const theHead = document.querySelector('head');
theHead.appendChild(fontLink);
scrollNavBar();