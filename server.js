const db = require('./db');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get('/', function (req, res){
    res.send('Welcome to my hotel... how can I help you?');
});

// Import the router files
const personRoutes = require('./router/personRoutes');
const menuRoutes = require('./router/menuRoutes');

// Use the routes
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
