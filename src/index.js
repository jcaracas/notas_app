const express = require('express');
const { path } = require('express/lib/application');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const override = require('methodOverride');
const session = require('express-session');

//Inicializations
const app = express();

// settings
app.set('port',process.env.PORT || 3000 );
app.get('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views','layouts')),
    partialsDir: path.join(app.get('views','partials')),
    extname: 'hbs'
}))
app.get('view engine','.hbs');

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride(_method));
app.use(session({
    secret: 'misecreto',
    resave: true,
    saveUninitialized: true
}));

// Variables glovales

// Routes


// Static files

// server listenning
app.listen(app.get('port'),()=>{
    console.log('Server on Port',app.get('port'));
});