{/* <nav class="nav-bar">
<a class="button" href="#project1">Fantasy Football Scheduler</a>
<a class="button" href="#project2">Task Magic</a>
<a class="button" href="#project3">This Website</a>
<a class="button" href="#project4">Space Explorer</a>
<a class="button" href="pictures.html">Pictures</a>
<a class="button" href="fortune.html">Fortune Cookie</a>
<a class="button" href="blog.html">Blogs</a>
</nav> */}
const theBody = document.querySelector('body');

linkURLs = [
    ['Fantasy Football Scheduler', 'index.html#project1'], 
    ['Task Magic', 'index.html#project2'], 
    ['This Website', 'index.html#project3'], 
    ['Space Explorer', 'index.html#project4'], 
    ['Pictures', 'pictures.html'], 
    ['Fortune Cookie', 'fortune.html'], 
    ['Blogs', 'blog.html'],
    ['Test', 'test.html']
];
function createNavBar() {
    let tempNavBar = document.createElement('nav');
    tempNavBar.classList.add('nav-bar');
    // tempNavBar.classList.add('disappearing');
    createNavLinks(tempNavBar);
    createNavLinks(tempNavBar);
    createNavLinks(tempNavBar);
    return tempNavBar;
}
function createNavLinks(navBar) {
    linkURLs.forEach(project => {
        let link = document.createElement('a');
        link.classList.add('button');
        link.textContent = project[0];
        link.href = project[1];
        navBar.appendChild(link);
    });
}
const myNavBar = createNavBar();
theBody.appendChild(myNavBar);
myNavBar.scrollTo(myNavBar.scrollWidth / 3, 0);


function setNavTop() {
    myNavBar.style.top = String((innerHeight - myNavBar.scrollHeight) + 'px');
}

function scrollNavBar() {
    const navLength = myNavBar.scrollWidth;
    console.log(navLength);
    console.log(myNavBar.scrollLeft);
    if (myNavBar.scrollLeft > navLength * 2 / 3) {
        console.log('hello');
        myNavBar.scrollLeft = navLength / 3;
    } else if (myNavBar.scrollLeft < navLength / 3) {
        console.log('goodbye');
        myNavBar.scrollLeft = navLength * 2 / 3;
    }
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