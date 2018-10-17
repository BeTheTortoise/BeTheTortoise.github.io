const thisBody = document.querySelector('body');

const h3Array = document.querySelectorAll('h3');
const gotCharTrigger = document.querySelector('[data-trigger]');
gotCharTrigger.addEventListener('click', (
    () => {
        const charNum = Math.floor(Math.random() * 2000);
        let charString = '';
        fetch(`https://anapioficeandfire.com/api/characters/${charNum}`)
            .then( r => r.json() )
            .then( j => {
                console.log(j);
                charString = j.titles.join(', ');
                charString = charString + ' ' + j.name;
                charString = charString + ', ' + j.aliases.join(', ');
                // charString = charString + 'hellooooo';
                h3Array[1].textContent = charString;
            });
            
        //     .then( j => console.log(j) );
        // console.log(charObj);
    }
));
// fetch('https://api.icndb.com/jokes/random')
// 	.then( r => r.json() )
// 	.then( j => console.log(j) );

const scripts = document.querySelectorAll('script');
thisBody.appendChild(scripts[scripts.length - 1]);

indexScript = document.createElement('script');
indexScript.src = 'scripts/index.js';
thisBody.appendChild(indexScript)