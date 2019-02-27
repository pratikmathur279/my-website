//EXPRESS SERVER
const express = require('express');
var app = express();
const port = 3001;

var request = require('request');

app.listen(port, () => {
    console.log(`Server started`);
});

app.post('/api', (req, res) => {
    console.log(res);
});

//EXPRESS SERVER END