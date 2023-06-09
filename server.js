const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const sensorRoute = require("./src/sensors/routes.js");


const app = express();
const port = 8080;


app.use(cors());


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.use('/update-sensor', sensorRoute);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));