const thisBody = document.querySelector('body');

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
thisBody.appendChild(createImageDiv());
const scripts = document.querySelectorAll('script');
scripts.forEach((script) => thisBody.appendChild(script));

function createImageDiv() {
    const theDiv = document.createElement('div');
    const imagesList = myImages.map((src) => {
        const newImage = document.createElement('img');
        newImage.src = src;
        newImage.classList.add('button');
        return newImage
    });
    imagesList.forEach((img) => {
        theDiv.appendChild(img);
    });
    theDiv.classList.add('imagesGrid');
    return theDiv;
}

indexScript = document.createElement('script');
indexScript.src = 'scripts/index.js';
thisBody.appendChild(indexScript)