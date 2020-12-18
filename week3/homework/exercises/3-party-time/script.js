"use strict";

const fetch = require('node-fetch');

async function makeReservation(name, numbers) {
    try {
        const endpoint = 'https://reservation100-sandbox.mxapps.io/api/reservations';
        const reservation = { "name": name, "numberOfPeople": numbers };
        const response = await fetch(endpoint, {
            method: 'POST',
            body:    JSON.stringify(reservation),
            headers: { 'Content-Type': 'application/json' }
        });

        const data = await response.json();

        console.log(data.message); //Print the message response to the console

    }
    catch (error) {
        console.log(error);
    }
}


makeReservation("John Doe", 3);
    // .then(result => console.log(result));
