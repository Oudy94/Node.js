const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios');

const app = express();

//Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

//Body parser middleware
app.use(express.json()); //Handle json data
app.use(express.urlencoded( {extended: false})); //Handle form data

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/weather', (req, res) => {
    if(typeof req.body === "undefined" || typeof req.body.cityName === "undefined"){
        res.status(404);
        res.send("Invalid request");
        return;
    }
    const cityName = req.body.cityName;
    res.json(cityName);
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log("Server started."));
