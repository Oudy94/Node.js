"use strict";

const fetch = require('node-fetch');

async function printChuckNorrisJoke() {
    try {
        const endpoint = 'http://api.icndb.com/jokes/random';
        const response = await fetch(endpoint);

        if (response.ok) {
            const data = await response.json();

            console.log(data); //Print the entire response to the console to see how it is structured.
            console.log(data.value.joke); //Print random joke.
            return data.value.joke; //Returns a random joke
        }
        else {
            throw 'error';
        }
    }
    catch (error) {
        console.log(error);
    }
}

printChuckNorrisJoke();
    // .then(result => console.log(result));
