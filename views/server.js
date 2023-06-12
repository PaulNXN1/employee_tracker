const express = require('express');

// Creating app variable, which calls express function. This sets up server.
const app = express();

app.set('view engine', 'ejs');

// Route Setup

app.get('/', (req, res) => {

    console.log('Hi');
    // res.json({ message: 'Hi'});
   // res.send('Welcome!'); For testing
    res.render('index' , {text: 'World!'});

});





// Makes the server run. 
app.listen(4444);