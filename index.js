const express = require('express');
const router = require('./src/routes/index');

var expressLayouts = require('express-ejs-layouts');

const app = express();


app.use(expressLayouts);
app.set('layout', __dirname+'/src/views/layouts/layout');
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/', router);
// app.set('layout', true);



app.listen(3000, () => {
    console.log('Server started at 3000!!');
});