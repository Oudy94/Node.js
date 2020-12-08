"use strict";

const fetch = require('node-fetch');

async function printBooks() {
    try {
        const endpoint = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';
        const response = await fetch(endpoint, {
            headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data); //Returns the data
            return data;
        }
        else {
            throw 'error';
        }
    }
    catch (error) {
        console.log(error);
    }
}

printBooks();
    // .then(result => console.log(result));
