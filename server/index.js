require('dotenv').config();

const express = require('express');
const app = express();

app.get('/api/hello', function (req, res){
    res.json({message: 'Hello from Vercel'});
});