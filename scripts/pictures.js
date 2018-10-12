const theBody = document.querySelector('body');
theBody.appendChild(createLogoButton());
const myImages = [
    'images/sad-images/sad_asteroid.jpg',
    'images/sad-images/sad_bear.jpg',
    'images/sad-images/sad_cloud.jpg',
    'images/sad-images/sad_cpr.jpg',
    'images/sad-images/sad_dino.jpg',
    'images/sad-images/sad_pig.jpg',
    'images/sad-images/sad_planet.jpg',
    'images/sad-images/sad_whale.jpg',
    'images/coffee-table.jpg',
    'images/me.jpg'
]
theBody.appendChild(createImageDiv());
const scripts = document.querySelectorAll('script');
theBody.appendChild(scripts[scripts.length - 1]);

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

function createImageDiv() {
    const theDiv = document.createElement('div');
    const imagesList = myImages.map((src) => {
        const newImage = document.createElement('img');
        newImage.src = src
        return newImage
    });
    imagesList.forEach((img) => {
        theDiv.appendChild(img)
    });
    theDiv.classList.add('imagesGrid');
    return theDiv;
}