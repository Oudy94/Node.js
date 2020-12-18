"use strict";

const fetch = require('node-fetch');

async function printChuckNorrisJoke() {
    try {
        const endpoint = 'http://api.icndb.com/jokes/random';
        const response = await fetch(endpoint);

        const data = await response.json();

        console.log(data.value.joke); //Print random joke.
    }
    catch (error) {
        console.log(error);
    }
}

printChuckNorrisJoke();
    // .then(result => console.log(result));
