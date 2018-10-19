const thisBody = document.querySelector('body');
// thisBody.overflow = 'hidden';

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
// thisBody.appendChild(createImageDiv());
// thisBody.appendChild(createImageDiv());
thisBody.onscroll = scrollImageDiv;
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
modalElement.addEventListener('click', () => modalElement.classList.add('modal-hidden'));

function createImageDiv() {
    const theDiv = document.createElement('div');
    const imagesList = createImageElementsList(myImages);
    imagesList.forEach((img) => {
        theDiv.appendChild(img);
    });
    theDiv.classList.add('imagesGrid');
    return theDiv;
}

function createImageElementsList(images) {
    return images.map((src) => {
        const newImage = createImageElement(src);
        return newImage
    });
}

function createImageElement(src) {
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
    return newImage;
}

function scrollImageDiv() {
    // for scrolling up
    // take top 2 image containers, find heights
    const myImageDiv = document.getElementsByClassName('imagesGrid');
    // when container has scrolled past those heights
    const pageImages = document.querySelectorAll('img.button');
    console.log(window.scrollY);
    console.log(pageImages[0].scrollHeight);
    const twoImageHeight = pageImages[0].scrollHeight + pageImages[1].scrollHeight;
    if (window.scrollY > twoImageHeight) {
    // remove top image
        console.log('Removing image');
        pageImages[0].parentNode.removeChild(pageImages[0]);
    // scroll up top image's height to maintain scroll position
    };
    // if scrolled to bottom of container
    const bodyLength = thisBody.scrollHeight;
    console.log(bodyLength);
    if (window.scrollY + window.innerHeight == thisBody.scrollHeight) {
    // add new image to bottom
        const randomImageSrc = myImages[Math.floor(Math.random() * myImages.length)];
        console.log(randomImageSrc);
        console.log('hello');
        myImageDiv[0].appendChild(createImageElement(randomImageSrc));
    };
    // let bodyScroll = window.scrollY;
    // console.log(bodyLength);
    // console.log(window.scrollY);
    // if (bodyScroll > bodyLength * 2 / 3) {
    //     window.scrollTo(0, bodyLength / 3);
    // } else if (bodyScroll < bodyLength / 3) {
    //     window.scrollTo(0, bodyLength * 2 / 3);
    // }
    // console.log(window.scrollY);
}

const scripts = document.querySelectorAll('script');
scripts.forEach((script) => thisBody.appendChild(script));

// indexScript = document.createElement('script');
// indexScript.src = 'scripts/index.js';
// thisBody.appendChild(indexScript)