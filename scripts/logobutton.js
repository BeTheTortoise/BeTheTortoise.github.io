// <a class="logo button" href="index.html"><img src="CollectColl/Standard Logo Files/Monochrome on Transparent.png"></a>
function createLogoButton() {
    const theA = document.createElement('a');
    theA.href = 'index.html';
    theA.classList.add('logo');
    theA.classList.add('button');
    const theLogo = document.createElement('img');
    theLogo.src = 'CollectColl/Standard Logo Files/Original.png';
    theA.appendChild(theLogo);

    return theA;
}

theBody.appendChild(createLogoButton());