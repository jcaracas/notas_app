const express = require('express');
const path  = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
const flahs = require('connect-flash');
const hbs = require('hbs');
const passport = require('passport');



//Inicializations
const app = express();
require('./database');
require('./config/passport');

// settings
app.set('port',process.env.PORT || 3000 );

app.set('views', path.join(__dirname,'views'));
app.set('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'
}));
hbs.registerPartials(path.join(app.get('views'),'partials'));

app.set('view engine','.hbs');

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(session( {
    secret: 'misecreto',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flahs()); 


// Variables glovales
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});
// Routes
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/user'));

// Static files
app.use(express.static(path.join(__dirname,'public')));



// server listenning*/
app.listen(app.get('port'),()=>{
    console.log('Server on Port',app.get('port'));
});