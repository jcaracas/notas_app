const express = require('express');
const async = require('hbs/lib/async');
const rutas = new express.Router();
const User = require('../models/User');
const passport = require('passport');

rutas.get('/users/singin',(req,res)=>{
    res.render('users/singin', {layout: 'layouts/main'});
});

rutas.post('/users/singin', passport.authenticate('local',{
    successRedirect: '/notes',
    failureRedirect: '/users/singin',
    failureFlash: true,
    layout: 'layouts/main'
}))

rutas.get('/users/singup',(req,res)=>{
    res.render('users/singup', {layout: 'layouts/main'});
});

rutas.post('/users/singup',async(req,res)=>{
    const {name, email, password, confirm_password} = req.body;
    const errors =[];
    if(name<=0 || email<=0 || password<=0){
        errors.push({text:'Please insert value...'})
    }
    if(password!=confirm_password){
        errors.push({ text: 'Password do not match'});
    }
    if(password.length < 4){
        errors.push({text:'Password must be at least 4 characters'});
    }
    if(errors.length>0){
        res.render('users/singup',{errors,name,email,password,confirm_password,layout: 'layouts/main'});
    }else{
        const emailUser = await User.findOne({email:email});
        if(emailUser){
            req.flash('error_msg','Email is already in use');
            res.redirect('/users/singup'); 
        }else{
            const newUser = new User({name,email,password,confirm_password});
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash('success_msg','You are Registered');
            res.redirect('/users/singin');
        }
    }

});

module.exports= rutas;