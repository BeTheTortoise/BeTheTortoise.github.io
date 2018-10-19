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
thisBody.onload = scrollToSecondImage;
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
    newImage.classList.add('pageImage');
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
    const bodyLength = thisBody.scrollHeight;
    const frameLength = window.innerHeight;
    const aboveFrameLength = window.scrollY;
    const imagesDiv = document.getElementsByClassName('imagesGrid')[0];
    const pageImages = document.getElementsByClassName('pageImage');
    console.log(imagesDiv, pageImages);
    const topImageLength = pageImages[0].scrollHeight;
    const topTwoImagesLength = topImageLength + pageImages[1].scrollHeight;
    const lastImageLength = pageImages[pageImages.length - 1].scrollHeight;
    const lastTwoImagesLength = lastImageLength + pageImages[pageImages.length - 2].scrollHeight;
    console.log(bodyLength, frameLength, topTwoImagesLength, lastTwoImagesLength);
    
    // if there are two photos below frame, remove photo from bottom
    if (bodyLength > frameLength + aboveFrameLength + lastTwoImagesLength) {
        console.log('removing photo');
        console.log(bodyLength, frameLength, topTwoImagesLength, lastTwoImagesLength);
        imagesDiv.removeChild(pageImages[pageImages.length - 1]);
    } else if (bodyLength < aboveFrameLength + frameLength + lastImageLength) {
        // if there is less than one photo below frame, add photo to bottom
        console.log('adding photo');
        console.log(bodyLength, frameLength, topTwoImagesLength, lastTwoImagesLength);
        const randomImageSrc = myImages[Math.floor(Math.random() * (myImages.length - 1))];
        const randomImgElement = createImageElement(randomImageSrc);
        randomImgElement.src = randomImageSrc;
        imagesDiv.appendChild(randomImgElement);
    }
    // if there are two photos above frame, remove photo from top
    // if there is not one photo above frame, add photo to top

    // console.log(window.scrollY);
    // for scrolling up
    // take top 2 image containers, find heights
    // const myImageDiv = document.getElementsByClassName('imagesGrid')[0];
    // const pageImages = document.querySelectorAll('img.button');
    // const lastImageIndex = pageImages.length - 1;
    // const topTwoImageHeight = pageImages[0].scrollHeight + pageImages[1].scrollHeight;
    // const bottomTwoImageHeight = pageImages[lastImageIndex].scrollHeight + pageImages[lastImageIndex - 1].scrollHeight;
    // const bodyLength = thisBody.scrollHeight;
    // // when container has scrolled past those heights
    // console.log(topTwoImageHeight, bottomTwoImageHeight);
    // if (window.scrollY > topTwoImageHeight) {
    // // remove top image
    //     console.log('Removing image from top');
    //     pageImages[0].parentNode.removeChild(pageImages[0]);
    // } else if (window.scrollY < topTwoImageHeight) {
    //     // // if scrolled to top of container
    // // add new image to top
    //     console.log('adding image to top');
    //     const randomImageSrc = myImages[Math.floor(Math.random() * myImages.length)];
    //     const randomImgElement = createImageElement(randomImageSrc);
    //     console.log(myImageDiv, pageImages[0]);
    //     // myImageDiv.insertBefore(randomImgElement, pageImages[0].parentNode.firstChild);
    //     window.scrollTo({top: topTwoImageHeight});
    // } else if (bodyLength - window.innerHeight - window.scrollY < bottomTwoImageHeight) {
    // // add new image to bottom
    //     console.log('adding image to bottom')
    //     const randomImageSrc = myImages[Math.floor(Math.random() * myImages.length)];
    //     // console.log(randomImageSrc);
    //     myImageDiv.appendChild(createImageElement(randomImageSrc));
    // } else if (bodyLength - window.innerHeight - window.scrollY > bottomTwoImageHeight) {
    //     // for scrolling down
    //     // take bottom 2 image containers and heights
    //     // when container has scrolled past those heights
    //     // remove bottom image
    //     console.log('removing image from bottom');
    //     pageImages[lastImageIndex].parentNode.removeChild(pageImages[lastImageIndex]);         
    // };

    


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

function scrollToSecondImage() {
    const pageImages = document.querySelectorAll('img.button');
    window.scrollTo({top: pageImages[0].scrollHeight});
    console.log(window.scrollY);
}  

const scripts = document.querySelectorAll('script');
scripts.forEach((script) => thisBody.appendChild(script));

// indexScript = document.createElement('script');
// indexScript.src = 'scripts/index.js';
// thisBody.appendChild(indexScript)