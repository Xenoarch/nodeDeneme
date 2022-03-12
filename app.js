const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("Welcome home page");
});

app.get('/musti', (req, res) => {
    res.send("mustii");
});

const port = process.env.port || 3000;
app.listen(port, () => { 
    console.log("Wazzaappp");
});

