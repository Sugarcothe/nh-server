const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello from homepage'))


// Starting server
app.listen(PORT, 
    console.log(`LISTENING ON PORT ${5000}`))