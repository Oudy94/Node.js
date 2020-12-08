"use strict";

const Handlebars = require("handlebars");

const subjects = [
    'shark',
    'popcorn',
    'poison',
    'fork',
    'cherry',
    'toothbrush',
    'cannon',
];
  
const punchlines = [
    'watch movie with',
    'spread some love',
    'put on cake',
    'clean toilets',
    'go to the moon',
    'achieve world piece',
    'help people learn programing',
];


function drawCard() {
    const randomSubject = getRandomElement(subjects);
    const randomPunchlines = getRandomElement(punchlines);
    const cardData = {subject: randomSubject, punchline: randomPunchlines};
    const card = `{{subject}} is great to {{punchline}}`;
    const template = Handlebars.compile(card);
    const result = template(cardData);

    console.log(result);
    return result;
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

drawCard();


