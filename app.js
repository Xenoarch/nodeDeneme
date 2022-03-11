const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome home page");
});

app.listen(3000, () => { 
    console.log("Wazzaappp");
});

