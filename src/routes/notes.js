const express = require('express');
const res = require('express/lib/response');
const rutas = new express.Router();

const Note = require('../models/Note');

rutas.get('/notes/add',(req, res)=>{
    res.render('notes/new_notes', {layout: 'layouts/main'});
});

// Rutas para guardar Notas
rutas.post('/notes/new_notes', async(req,res)=>{
    const { title, description } = req.body;
    const errors=[];
    if(!title){
        errors.push({text: 'Please write a Title'});
    }
    if(!description){
        errors.push({text: 'Please write a description'});
    }
    if(errors.length>0){
        res.render('notes/new_notes', {layout: 'layouts/main',errors,title,description});
    }else{
        const newNote = new Note({title, description});
        await newNote.save(function (err) {
            if (err) {
                console.log(err);
                return;
                }
            });
        req.flash('success_msg','Note added Successfully');
        res.redirect('/notes');
    }
}); 

//Ruta para listas todas las notas, ordenadas por fecha
rutas.get('/notes', async (req,res)=>{
    const notes = await Note.find().sort({date:'desc'});
    res.render('notes/all-notes', {layout: 'layouts/main', notes});
});

//Ruta para editar
rutas.get('/notes/edit/:id',async(req,res)=>{
    const note= await Note.findById(req.params.id);
    res.render('notes/edit-note',{layout: 'layouts/main',note});
});

rutas.put('/notes/edit-note/:id',async(req,res)=>{
    const { title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id,{ title, description});
    req.flash('success_msg','Note Updated Successfully');
    res.redirect('/notes');
});

//Ruta para borrar notas
rutas.delete('/notes/delete/:id', async(req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg','Note deleted Successfully');
    res.redirect('/notes');
});
module.exports= rutas;