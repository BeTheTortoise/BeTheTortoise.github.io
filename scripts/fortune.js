console.log('Yep, I am here');
// // Classes for styling
// // "data attributes" for JS

// run code on button click
// // show text on click
// // pull data from array to provide text
let sadTrigger = document.querySelector('[data-trigger="sadFacts"]');

let sadQuote = document.querySelector('[data-output="sadFacts"]');

let sadImage = document.querySelector('[data-output-image]');

let sadFacts = [
    { text: 'Grizzlies have been known to abandon their cubs.', image: 'images/sad-images/sad_bear.jpg'}, { text: 'Humans killed the world\'s oldest animal.', image: 'images/sad-images/sad_dino.jpg'}, { text: 'Pluto didn\'t even get a birthday as a planet (i.e., make a full orbit around the sun).', image: 'images/sad-images/sad_planet.jpg'}, { text: 'Pigs can get depressed.', image: 'images/sad-images/sad_pig.jpg'}, { text: 'CPR doesn\'t usually work.', image: 'images/sad-images/sad_cpr.jpg'}, { text: 'Scientists have found the loneliest whale.' , image: 'images/sad-images/sad_whale.jpg'}, { text: 'The more you know, the worse it gets.', image: 'images/sad-images/sad_asteroid.jpg'}
];

let lottoTrigger = document.querySelector('[data-trigger="lottoNumbers"]');

let lottoQuote = document.querySelector('[data-output="lottoNumbers"]');

// // addEventListener accepts string for kind of event
// // and function to execute on event
sadTrigger.addEventListener('click', makeSadFact);

function makeSadFact() {
    let sadFact = sadFacts[Math.floor(Math.random() * sadFacts.length)]
    // sadFact = sadFacts.pop();
    console.log(`Hello addEventListener`);
    sadQuote.textContent = `${sadFact['text']}`;
    sadImage.setAttribute('src', `${sadFact['image']}`)
    // sadFacts.unshift(sadFact);
}

lottoTrigger.addEventListener('click', makeLottoNumbers);

function makeLottoNumbers() {
    let lottoNumbers = [];
    for (i = 6; i > 0; i--) {
        lottoNumber = Math.floor((Math.random() * 100));
        lottoNumbers.push(lottoNumber);
    }
    lottoQuote.textContent = lottoNumbers.join(', ');
}

let fortunes = [
    'You will die someday.',
    'You have a name.',
    'The sky is blue (unless it\'s cloudy)',
    'You will finish this sentence.',
    'You will send your money to Collin.'
]

function createFortuneSection() {
    const theSection = document.createElement('section');
    theSection.classList.add('stringGenerator');
    theSection.appendChild(createFortuneHeader());
    theSection.appendChild(createFortuneDiv());
    theSection.appendChild(createFortuneButton());
    return theSection;
}

function createFortuneHeader() {
    const theHeader = document.createElement('h1');
    theHeader.textContent = 'Here is your fortune.';

    return theHeader;
}

function createFortuneDiv() {
    const theDiv = document.createElement('div');
    theDiv.classList.add('quoteDisplay');

    return theDiv;
}

function createFortuneButton() {
    const theButton = document.createElement('button');
    theButton.textContent = 'Click here for a surprise';
    theButton.setAttribute('data-trigger', '');
    theButton.addEventListener('click', () => {
        console.log('surprise button pressed.');
        const theDivs = document.querySelectorAll('.quoteDisplay');
        theDiv = theDivs[theDivs.length - 1];
        theDiv.textContent = fortunes[Math.floor((Math.random() * fortunes.length))];
    });

    return theButton;
}

// function addFortuneSection() {
const theBody = document.querySelector('body');
theBody.appendChild(createFortuneSection());
const scripts = document.querySelectorAll('script');
theBody.appendChild(scripts[scripts.length - 1]);

// }

logoButtonScript = document.createElement('script');
logoButtonScript.src = 'scripts/logobutton.js';
theBody.appendChild(logoButtonScript)