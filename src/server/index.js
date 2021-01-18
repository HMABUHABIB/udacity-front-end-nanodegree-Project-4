var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const axios = require('axios')

/* Express */
const express = require('express')
const app = express()
app.use(express.static('dist'))

console.log(__dirname)


/* Dependencies */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// dotenv
const dotenv = require('dotenv');
dotenv.config();

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Backend Get and Post
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)

    console.log("samer");
})


app.get('/openweathermap', async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=' + req.query.zip + '&appid=' + process.env.API_KEY + '&units=metric');
        res.send(response.data)
    } catch (error) {
        console.error(error);
        res.send(error)
    }

})
