const body = document.body

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

body.appendChild(createLogoButton());