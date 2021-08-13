const express = require('express');
const router = require('./src/routes/index');
const app = express();

app.use('/', router);
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.listen(3000, () => {
    console.log('Server started at 3000!!');
});