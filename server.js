const express = require('express');
const app = express();

const port = process.env.PORT || 3010;

app.use(express.static("./"));

app.get("/skills", function (req, res) {
    console.log('skills'); 
  // res.sendFile("./index.html"); //index.html file of your angularjs application
});

app.listen(port, function () {
    console.log("Express server listening on port " + port);
});
