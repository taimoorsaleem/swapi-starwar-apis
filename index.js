const express = require('express');
const app = express();
const starwar = require('./starwar');

app.use('/starwar', starwar);
app.get('/', (req, res) => res.send("Hello world"));

app.listen(4000, (req, res) => console.log('Server up on port 4000'));