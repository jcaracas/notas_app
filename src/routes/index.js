const express = require('express');
const rutas = new express.Router();

rutas.get('/',(req,res)=>{
    res.send('Index');
});

module.exports= rutas;