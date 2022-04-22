const express = require('express');
const path  = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Inicializations
const app = express();

// settings
app.set('port',process.env.PORT || 3000 );

app.set('views', path.join(__dirname,'views'));
app.set('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));

app.set('view engine','.hbs');

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session( {
    secret: 'misecreto',
    resave: true,
    saveUninitialized: true
}));

// Variables glovales

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/user'));

// Static files

// server listenning*/
app.listen(app.get('port'),()=>{
    console.log('Server on Port',app.get('port'));
});