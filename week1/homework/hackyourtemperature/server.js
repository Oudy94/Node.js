const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios');

const app = express();

//Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index',{
        greetings: 'hello from backend to frontend!'
    }) ;
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log("Server started."))
