const thisBody = document.querySelector('body');

const gotOutput = document.querySelector('[data-output="got"]');
const gotTrigger = document.querySelector('[data-trigger="got"]');
gotTrigger.addEventListener('click', (
    () => {
        const charNum = Math.floor(Math.random() * 2000);
        let charString = '';
        fetch(`https://anapioficeandfire.com/api/characters/${charNum}`)
            .then( r => r.json() )
            .then( j => {
                console.log(j);
                charString = j.titles.join(', ');
                charString = charString + ' ' + j.name;
                if (j.aliases[0] != '') {
                    charString = charString + ', ' + j.aliases.join(', ');
                }
                // charString = charString + 'hellooooo';
                gotOutput.textContent = charString;
            });
            
        //     .then( j => console.log(j) );
        // console.log(charObj);
    }
));

const weatherOutput = document.querySelector('[data-output="weather"]');
const weatherTrigger = document.querySelector('[data-trigger="weather"]').addEventListener('click', () => {
    outputString = '';
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=30328,us&APPID=adfd069d135d0801d35399323f1ea34c')
        .then( r => r.json())
        .then( j => {
            console.log(j);
            weatherDescription = `${j[`weather`][0][`description`]}`;
            highTemp = `${j[`main`][`temp_max`]}`;
            lowTemp = `${j[`main`][`temp_min`]}`;
            humidity = `${j[`main`][`humidity`]}`;
            wind = `${j['wind']['speed']} mph at ${j['wind']['deg']} degrees`;
            outputString = `In ${j['name']}, expect ${weatherDescription} with a low of ${lowTemp} and a high of ${highTemp}. Humidity is ${humidity}% and wind is ${wind}.`;
            weatherOutput.textContent = outputString;
        });
});

const twitterOutput = document.querySelector('[data-output="twitter"]');
const twitterTrigger = document.querySelector('[data-trigger="twitter"]');
twitterTrigger.addEventListener('click', () => {
// This is space for the api key to be loaded securely



    const encodedKey = encodeURI(apiPublicKey) + ':' + encodeURI(apiSecretKey);
    const b64Key = btoa(encodedKey);
    // Get bearer token
    fetch(
        `https://api.twitter.com/oauth2/token`,
        {
            method: "POST",
            headers: {
                "Authorization": `Basic ${b64Key}`,
                "ContentType": "application/x-www-form-urlencoded;charset=UTF-8",
            },
            body: "grant_type=client_credentials",
            // mode: "no-cors",
        }
    )
        .then(j => {
            console.log(j);
            if (j.status == 0) {
                console.log(j);
            } else {
                console.log(j.statusText);
            }
        })
        .catch(() => twitterOutput.textContent = "Bad request");
});
// fetch('https://api.icndb.com/jokes/random')
// 	.then( r => r.json() )
// 	.then( j => console.log(j) );

function initMap() {
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 33, lng: -84},
        zoom: 5
    });
    var directionsRequest = {};
    directionsRequest.destination = {lat: 35.621, lng: -83.6775};
    directionsRequest.origin = 'Springer Mountain, GA';
    directionsRequest.travelMode = 'WALKING';
    directionsService.route(directionsRequest, (result, status) => {
        if (status == 'OK') {
            directionsRenderer.setMap(map);
            directionsRenderer.setDirections(result);
        } else {
            console.log(status);
        }
    });
}

// const scripts = document.querySelectorAll('script');
// thisBody.appendChild(scripts[scripts.length - 1]);

// indexScript = document.createElement('script');
// indexScript.src = 'scripts/index.js';
// thisBody.appendChild(indexScript)
// window.onresize = () => document.getElementById('map').style.height = document.getElementById('map').style.width;