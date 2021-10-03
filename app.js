const express = require('express')
const fs = require('fs');
const path = require("path");
const app = express();
const port = 80;
const publicip = '190.19.188.166';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const dataPath = path.join(__dirname + '/datos.json');

let datosVacas = [];

fs.readdir(process.cwd(), function (err, files) {
    if (err) {
        console.log(err);
        return;
    }



    if (!files.includes("datos.json")) {
        fs.writeFileSync(dataPath, '[]');
        return;
    };

    datosVacas = JSON.parse(fs.readFileSync(dataPath));
});








app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.get('/vacas', (req, res) => {
    res.status(200).json(datosVacas);
})


app.post('/agregarVaca', (req, res) => {
    datosVacas.push(req.body);
    console.log(datosVacas)
    fs.writeFileSync(dataPath, JSON.stringify(datosVacas));
    res.statusCode = 200;
    res.end();
})

app.listen(port, () => {
    console.log(`Server listening listening at ${publicip}:${port}`)
})