require("dotenv").config();
const express = require('express');
const app = express();

const print = require("./controller");

// Existing endpoint
app.get('/', print);

// New endpoint for /home
app.get('/home', (req, res) => {
    res.send("This is the home page");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
});
