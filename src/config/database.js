const mongoose = require('mongoose');

const connect = () => {
    console.log("Mongodb connected");
    return mongoose.connect('mongodb://localhost/twitter_dev');
}

module.exports = connect;