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
    ('Fantasy Football Scheduler', 'index.html#project1'), 
    ('Task Magic', 'index.html#project2'), 
    ('This Website', 'index.html#project3'), 
    ('Space Explorer', 'index.html#project4'), 
    ('Pictures', 'pictures.html'), 
    ('Fortune Cookie', 'fortune.html'), 
    ('Blogs', 'blog.html')
]
function createNavBar() {
    let tempNavBar = document.createElement('nav');
    tempNavBar.classList.add('nav-bar');
    createNavLinks(tempNavBar);
    return tempNavBar;
}
function createNavLinks(navBar) {
    linkURLs.forEach(project => {
        let link = document.createElement('a');
        link.classList.add('button');
        link.textContent = project;
        link.href = project;
        navBar.appendChild(link);
    });
}
const myNavBar = createNavBar();
theBody.appendChild(myNavBar);

function setNavTop() {
    myNavBar.style.top = String((innerHeight - myNavBar.scrollHeight) + 'px')
}
setNavTop()
window.onresize = setNavTop



logoButtonScript = document.createElement('script');
logoButtonScript.src = 'scripts/logobutton.js';
theBody.appendChild(logoButtonScript)