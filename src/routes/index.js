const express = require('express');
const rutas = new express.Router();

rutas.get('/',(req,res)=>{
    res.render('index', {layout: 'layouts/main'});
});

rutas.get('/about',(req,res)=>{
    res.render('about', {layout: 'layouts/main'});
});
module.exports= rutas;