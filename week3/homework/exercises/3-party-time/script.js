"use strict";

const fetch = require('node-fetch');

async function makeReservation() {
    try {
        const endpoint = 'https://reservation100-sandbox.mxapps.io/api/reservations';
        const reservation = { "name": "John Doe", "numberOfPeople": 3 };
        const response = await fetch(endpoint, {
            method: 'POST',
            body:    JSON.stringify(reservation),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            const data = await response.json();

            console.log(data.message); //Print the message response to the console
            return data.message; //Returns a message
        }
        else {
            throw 'error';
        }

    }
    catch (error) {
        console.log(error);
    }
}


makeReservation();
    // .then(result => console.log(result));
