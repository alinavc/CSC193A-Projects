'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req,res) => {
    let radius=req.params[r];
    res.type('json');
    res.json({"area":(3.14 * radius * radius), "circumference": (3.14 * (2*radius))})
});
// define endpoint for exercise 2 here
app.get('/hello/name',(req,res) => {
    let firstName = req.query.first;
    let lastName = req.query.last;

    if(!firstName && !lastName){
        res.type('text').status(400).send('Missing Required GET Parameters: first, last');
    }
    else if(!firstName && lastName){
        res.type('text').status(400).send('Missing Required GET Parameters: first');
    }
    else if(firstName && !lastName){
        res.type('text').status(400).send('Missing Required GET Parameters: last');
    }
    
    res.type('text');
    res.send("Hello ",firstName," ", lastName);
});


const PORT = process.env.PORT || 8000;
app.listen(PORT);

