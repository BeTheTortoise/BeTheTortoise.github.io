const thisBody = document.querySelector('body');

const gotCharHeader = document.querySelector('h3');
const gotCharTrigger = document.querySelector('[data-trigger]');

gotCharTrigger.addEventListener('click', (
    () => console.log('got button pressed')
));

const scripts = document.querySelectorAll('script');
scripts.forEach((script) => thisBody.appendChild(script));

indexScript = document.createElement('script');
indexScript.src = 'scripts/index.js';
thisBody.appendChild(indexScript)