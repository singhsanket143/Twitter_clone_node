const express = require('express');
const {json, urlencoded} = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const passportlocal = require('./src/config/passport-local-strategy');

const router = require('./src/routes/index');
const connect = require('./src/config/database');

var expressLayouts = require('express-ejs-layouts');

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({extended: true}));

app.use(express.static(__dirname+'/src/assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use(expressLayouts);
app.set('layout', __dirname+'/src/views/layouts/layout');
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(session({
    name: 'twitter',
    secret: 'sanketunacademy',
    resave: false,
    cookie: {
        maxAge: 6000000
    }
}))


app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);
// app.set('layout', true);

console.log(__dirname+'/src/assets');

app.listen(3000, async () => {
    await connect();
    console.log('Server started at 3000!!');
});