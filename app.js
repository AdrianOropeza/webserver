require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

//Servir contenido estatico para index.html
app.use( express.static('public') );

app.get('/elements', ( req, res ) => {
    res.sendFile(__dirname + '/public/elements.html');
});

app.get('/generic', ( req, res ) => {
    res.sendFile(__dirname + '/public/generic.html');
});

/*
app.get('*', ( req, res ) => {
    res.sendFile(__dirname + '/public/404.html');
});
*/

app.listen(port);

console.log("App corriendo en: " + port );