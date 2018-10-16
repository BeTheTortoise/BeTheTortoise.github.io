const thisBody = document.querySelector('body');

const myImages = [
    'images/sad-images/sad_asteroid.jpg',
    'images/sad-images/sad_bear.jpg',
    'images/sad-images/sad_cloud.jpg',
    'images/sad-images/sad_dino.jpg',
    'images/sad-images/sad_pig.jpg',
    'images/sad-images/sad_planet.jpg',
    'images/sad-images/sad_whale.jpg',
    'images/coffee-table.jpg',
    'images/me.jpg'
]
thisBody.appendChild(createImageDiv());
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
modalElement.addEventListener('click', () => modalElement.classList.add('modal-hidden'));

function createImageDiv() {
    const theDiv = document.createElement('div');
    const imagesList = myImages.map((src) => {
        const newImage = document.createElement('img');
        newImage.src = src;
        newImage.classList.add('button');
            // add an event listener to the image
        newImage.addEventListener('click', function (event) {
            console.log('hello!');
            // the element that got clicked is accessible
            // as `event.target`
            // And, I can read the `src` attribute!
            console.log(event.target.src);

            // I can now set the output image's src
        // to event.target.src!
            outputElement.setAttribute('src', event.target.src);
            // modalElement.classList.toggle('modal-hidden');
            // "remove" is more specific, so we'll use that. yeah!
            modalElement.classList.remove('modal-hidden');
        });
        return newImage
    });
    imagesList.forEach((img) => {
        theDiv.appendChild(img);
    });
    theDiv.classList.add('imagesGrid');
    return theDiv;
}

const scripts = document.querySelectorAll('script');
scripts.forEach((script) => thisBody.appendChild(script));

indexScript = document.createElement('script');
indexScript.src = 'scripts/index.js';
thisBody.appendChild(indexScript)