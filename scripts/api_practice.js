const thisBody = document.querySelector('body');

const h3Array = document.querySelectorAll('h3');
const gotCharTrigger = document.querySelector('[data-trigger]');

gotCharTrigger.addEventListener('click', (
    () => {
        const charNum = Math.floor(Math.random() * 2000);
        fetch(`https://anapioficeandfire.com/api/characters/${charNum}`)
            .then( r => r.json() )
            .then( j => {
                console.log(j);
                h3Array[1].textContent = j.name + j.aliases[0];
            });
            
        //     .then( j => console.log(j) );
        // console.log(charObj);
    }
));
// fetch('https://api.icndb.com/jokes/random')
// 	.then( r => r.json() )
// 	.then( j => console.log(j) );

const scripts = document.querySelectorAll('script');
scripts.forEach((script) => thisBody.appendChild(script));

indexScript = document.createElement('script');
indexScript.src = 'scripts/index.js';
thisBody.appendChild(indexScript)