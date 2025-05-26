require('dotenv').config();

const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.json({message: 'API root'});
});

app.get('/hello', function (req, res){
    res.json({message: 'Hello from Vercel'});
});