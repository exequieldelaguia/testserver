const express = require('express')
const path = require("path");
const app = express()
const port = 80

let counter = 0;
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get("/counter", (req, res) => {
    counter++;
    console.log(counter);
    res.status(200).end()
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})